import { html, LitElement, TemplateResult } from "lit";
import { customElement, property } from "lit/decorators.js";
import { Toast } from "toast";
import { fetch } from "util.js";

type SearchOption = {search: Record<string, string>, type: string, text: string};
type SearchAction = {
    url: string,
    type: string,
    text: string,
    action: string,
    js: string,
    confirm: string,
    icon: string
};

const isSearchOption = (opt): opt is SearchOption => (opt as SearchOption).search !== undefined;
const isSearchAction= (action): action is SearchAction => (action as SearchAction).js !== undefined || (action as SearchAction).action !== undefined || (action as SearchAction).url !== undefined;

@customElement("dodona-search-option")
export class SearchOptionElement extends LitElement {
    @property({ type: Object })
        searchOption: SearchOption;
    @property( { type: Number })
        key: number;

    private _active = false;

    // don't use shadow dom
    createRenderRoot(): Element {
        return this;
    }

    update(changedProperties: Map<string, unknown>): void {
        if (changedProperties.has("searchOption") && this.searchOption) {
            console.log(this.searchOption);
            this.setActive();
            Object.keys(this.searchOption.search).forEach(k => {
                dodona.search_query.query_params.subscribeByKey(k, () => this.setActive());
            });
        }
        super.update(changedProperties);
    }

    setActive(): void {
        this._active = Object.entries(this.searchOption.search).every(([key, value]) => {
            return dodona.search_query.query_params.params.get(key) == value.toString();
        });
    }

    performSearch(): void {
        if (!this._active) {
            Object.entries(this.searchOption.search).forEach(([key, value]) => {
                dodona.search_query.query_params.updateParam(key, value.toString());
            });
        } else {
            Object.keys(this.searchOption.search).forEach(key => {
                dodona.search_query.query_params.updateParam(key, undefined);
            });
        }
    }

    render(): TemplateResult {
        return html`
                    <li><span class="dropdown-item-text ">
                        <div class="form-check">
                            <input
                                class="form-check-input"
                                type="checkbox"
                                .checked=${this._active}
                                @click="${() => this.performSearch()}"
                                id="check-${this.searchOption.type}-${this.key}"
                            >
                            <label class="form-check-label" for="check-${this.searchOption.type}-${this.key}">
                                ${this.searchOption.text}
                            </label>
                        </div>
                    </span></li>
        `;
    }
}

@customElement("dodona-search-actions")
export class SearchActions extends LitElement {
    @property({ type: Array })
        actions: (SearchOption|SearchAction)[] = [];

    getSearchOptions(): Array<SearchOption> {
        return this.actions.filter(isSearchOption);
    }

    getSearchActions(): Array<SearchAction> {
        return this.actions.filter(isSearchAction);
    }

    // don't use shadow dom
    createRenderRoot(): Element {
        return this;
    }

    performAction(action: SearchAction): boolean {
        if (!action.action && !action.js) {
            return true;
        }

        if (!action.action) {
            eval(action.js);
            return false;
        }

        if (action.confirm === undefined || window.confirm(action.confirm)) {
            const url: string = dodona.search_query.addParametersToUrl(action.action);

            fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json" }
            }).then( data => {
                new Toast(data.message);
                if (data.js) {
                    eval(data.js);
                } else {
                    dodona.search_query.resetAllQueryParams();
                }
            });
        }

        return false;
    }


    render(): TemplateResult {
        return html`
            <div class="btn-group actions" id="kebab-menu">
                <a class="btn btn-icon dropdown-toggle" data-bs-toggle="dropdown">
                    <i class="mdi mdi-dots-vertical"></i>
                </a>
                <ul class="dropdown-menu dropdown-menu-end">
                    ${this.getSearchOptions().length > 0 ? html`
                        <li><h6 class='dropdown-header'>${I18n.t("js.options")}</h6></li>
                    ` : html``}
                    ${this.getSearchOptions().map((opt, id) => html`
                        <dodona-search-option .searchOption=${opt} .key=${id}>
                        </dodona-search-option>
                    `)}

                    ${this.getSearchActions().length > 0 ? html`
                        <li><h6 class='dropdown-header'>${I18n.t("js.actions")}</h6></li>
                    ` : html``}
                    ${this.getSearchActions().map(action => html`
                        <li>
                            <a class="action dropdown-item"
                               href='${action.url ? action.url : "#"}'
                               data-type="${action.type}"
                               @click=${() => this.performAction(action)}
                            >
                                <i class='mdi mdi-${action.icon} mdi-18'></i>
                                ${action.text}
                            </a>
                        </li>
                    `)}
                </ul>
            </div>
        `;
    }
}


