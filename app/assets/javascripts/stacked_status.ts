import * as d3 from "d3";

let selector = "#stacked_status-container";
const margin = { top: 0, right: 10, bottom: 20, left: 70 };
let width = 0;
let height = 0;
const statusOrder = [
    "correct", "wrong", "compilation error", "runtime error",
    "time limit exceeded", "memory limit exceeded", "output limit exceeded",
];

function drawStacked(data, maxSum, exMap): void {
    const xTicks = 10;
    const yDomain = Array.from(new Set(data.map(d => d.exercise_id)));
    console.log(yDomain);
    height = 100 * yDomain.length;
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;


    const graph = d3.select(selector)
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");

    console.log(height, innerHeight, Object.keys(data).length);
    // Show the Y scale
    const y = d3.scaleBand()
        .range([innerHeight, 0])
        .domain(yDomain)
        .padding(.5);
    graph.append("g")
        .call(d3.axisLeft(y).tickSize(0).tickFormat(t => exMap[t]))
        .select(".domain").remove();

    // y scale for legend elements
    const legendY = d3.scaleBand()
        .range([
            0,
            Math.min(200, innerHeight)
        ])
        .domain(statusOrder);


    // Show the X scale
    const x = d3.scaleLinear()
        .domain([0, 1])
        .range([0, innerWidth * 3 / 4 - 20]);


    // Color scale
    const color = d3.scaleOrdinal()
        .range(d3.schemeCategory10)
        .domain(statusOrder);

    // Add X axis label:
    graph.append("text")
        .attr("text-anchor", "end")
        .attr("x", innerWidth * 3 / 4 - 20)
        .attr("y", innerHeight + 30)
        .text("Percentage of submissions statuses")
        .attr("fill", "currentColor")
        .style("font-size", "11px");


    const legend = graph.append("g");

    // add legend colors dots
    legend.selectAll("dots")
        .data(statusOrder)
        .enter()
        .append("rect")
        .attr("y", d => legendY(d))
        .attr("x", innerWidth * 3 / 4)
        .attr("width", 15)
        .attr("height", 15)
        .attr("fill", d => color(d));

    // add legend text
    legend.selectAll("text")
        .data(statusOrder)
        .enter()
        .append("text")
        .attr("y", d => legendY(d) + 11)
        .attr("x", innerWidth * 3 / 4 + 20)
        .attr("text-anchor", "start")
        .text(d => d)
        .attr("fill", "currentColor")
        .style("font-size", "12px");

    // add bars
    graph.selectAll("bars")
        .data(data)
        .enter()
        .append("rect")
        .attr("x", d => x((d.cum_sum - d.count) / maxSum[d.exercise_id]))
        .attr("width", d => x(d.count / maxSum[d.exercise_id]))
        .attr("y", d => y(d.exercise_id))
        .attr("height", y.bandwidth())
        .attr("fill", d => color(d.status));
}

function initStacked(url, containerId: string): void {
    selector = containerId;
    const container = d3.select(selector);
    container.html(""); // clean up possible previous visualisations
    container.attr("class", "text-center").append("span").text(I18n.t("js.loading"));

    width = (container.node() as Element).getBoundingClientRect().width;
    const processor = function (raw): void {
        if (raw["status"] == "not available yet") {
            setTimeout(() => d3.json(url).then(processor), 1000);
            return;
        }
        d3.select(`${selector} *`).remove();

        const data = raw.data;
        data.sort((a, b) => {
            if (a.exercise_id === b.exercise_id) {
                return statusOrder.indexOf(a.status) - statusOrder.indexOf(b.status);
            } else {
                return a.exercise_id - b.exercise_id;
            }
        });
        let prevId = data[0].exercise_id;
        let prevSum = 0;
        const maxSum = {};
        data.forEach(d => {
            if (prevId !== d.exercise_id) {
                maxSum[prevId] = prevSum;
                prevId = d.exercise_id;
                prevSum = 0;
            }
            prevSum += d.count;
            d["cum_sum"] = prevSum;
        });
        maxSum[prevId] = prevSum;

        drawStacked(data, maxSum, raw.exercises);
    };
    d3.json(url).then(processor);
}

export { initStacked };
