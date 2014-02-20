(function(){

var width = 600,
    height = 600,
    r = 30,
    colors = ['green', 'red', 'orange', 'blue', 'yellow', 'cyan', 
              'gray', 'magenta', 'purple', 'brown', 'black'],
    data = d3.range(0, 30).map(function (d) {
      return {
        cx: 0 | Math.random() * width,
        cy: 0 | Math.random() * height,
        r: 0 | (Math.random() * r + r)
      }
    }),

    div = d3.select('#visualization'),
    svg = div.append('svg');

svg
  .attr('width', width)
  .attr('height', height)
  .selectAll('circle')
  .data(data)
  .enter()
  .append('circle')
  .attr('r', 20)
  .attr('cx', function (d) {
    return d.cx;
  })
  .attr('cy', function (d) {
    return d.cy;
  })
  .attr('fill', function (d, idx) {
    return colors[idx % colors.length];
  })
  .style('opacity', 0.6);

}).call(this);