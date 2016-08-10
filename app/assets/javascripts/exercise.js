function init_exercise_show(exerciseId, programmingLanguage, loggedIn) {
    var editor;
    var lastSubmission;

    function init() {
        initEditor();
        initLightboxes();

        centerImagesAndTables();

        // submit source code if button is clicked on editor panel
        $("#editor-process-btn").click(function () {
            if (!loggedIn) return;
            // test submitted source code
            var source = editor.getValue();
            submitSolution(source)
                .done(submissionSuccessful)
                .fail(submissionFailed);
        });

        // configure mathjax
        MathJax.Hub.Config({
            tex2jax: {
                inlineMath: [
                    ['$$', '$$'],
                    ['\\(', '\\)']
                ],
                displayMath: [
                    ['\\[', '\\]']
                ]
            }
        });
        MathJax.Hub.Queue(function () {
            /* MathJax has not been run yet*/
            if ($('span.MathJax').length === 0) {
                MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
            }
        });

        // export function
        dodona.feedbackLoaded = feedbackLoaded;
        dodona.feedbackTableLoaded = feedbackTableLoaded;
    }

    function initEditor() {
        // init editor
        editor = ace.edit("editor-text");
        editor.getSession().setMode("ace/mode/" + programmingLanguage);
        editor.setOptions({
            showPrintMargin: false,
            enableBasicAutocompletion: true
        });
        editor.getSession().setUseWrapMode(true);
        editor.$blockScrolling = Infinity; // disable warning
        editor.focus();
    }

    function initLightboxes() {
        initStrip();

        var index = 1;
        var images = [];
        $(".exercise-description img, a.dodona-lightbox").each(function () {
            var imagesrc = $(this).data('large') || $(this).attr('src') || $(this).attr('href');
            var altText = $(this).data("caption") || $(this).attr('alt') || imagesrc.split("/").pop();
            var image_object = {
                url: imagesrc,
                caption: altText
            };
            images.push(image_object);

            $(this).data('image_index', index++);
        });

        $(".exercise-description img, a.dodona-lightbox").click(function () {
            Strip.show(images, {
                side: 'top'
            }, $(this).data('image_index'));
            return false;
        });
    }

    function centerImagesAndTables() {
        $(".exercise-description p > img").parent().wrapInner("<center></center>");
        $(".exercise-description > table").wrap("<center></center>");
        $(".exercise-description > iframe").wrap("<center></center>");
    }

    function submitSolution(code) {
        return $.post("/submissions.json", {
            submission: {
                code: code,
                exercise_id: exerciseId
            }
        });
    }

    function feedbackLoaded() {
        $('#feedback').removeClass("hidden");
        $('#exercise-feedback-link').removeClass("hidden");
        $('#exercise-feedback-link').tab('show');
    }

    function feedbackTableLoaded() {
        if (lastSubmission) {
            var $submissionRow = $("#submission_" + lastSubmission);
            var status = $submissionRow.data("status");
            if (status == "queued" || status == "running") {
                setTimeout(function () {
                    $.get("submissions.js");
                }, 1000);
            } else {
                if ($("#exercise-submission-link").parent().hasClass("active")) {
                    $submissionRow.find(".load-submission").click();
                }
                showNotification(I18n.t("js.submission-processed"));
                lastSubmission = null;
            }
        }
    }

    function submissionSuccessful(data) {
        lastSubmission = data.id;
        showNotification(I18n.t("js.submission-saved"));
        $.get("submissions.js");
        $('#exercise-submission-link').tab('show');
    }

    function submissionFailed() {
        $('<div style="display:none" class="alert alert-danger alert-dismissible"> <button type="button" class="close" data-dismiss="alert"><span>&times;</span></button>' + I18n.t("js.submission-failed") + '</div>').insertBefore("#editor-window").show("fast");
    }

    init();
}
