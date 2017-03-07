var SVG = (function ($) {
  var jk = {};
  jk.config = {};
  jk.vars = {};
/* --------------------------------------------------	
-------------------------------------------------- */
  jk.views = {
    chartGraph : {
      createCanvas : function(width, height, container){
        var canvas = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        canvas.setAttribute('width', width);
        canvas.setAttribute('height', height);
        container.append(canvas);    
        return canvas;
      },
	  lines :  function (data, color, label, offsetLeft, offsetTop, height) {

			var _line = document.createElementNS("http://www.w3.org/2000/svg", "g"),
			    _values = "0," + height + " ",
			    _label = document.createElementNS("http://www.w3.org/2000/svg", "text"),
			    _pts = document.createElementNS("http://www.w3.org/2000/svg", "polyline"),
			    _labelY = 40 * ($("svg").find("polyline").length + 1);
				
				$.each(data, function(i, v){    				
    				var _y = Math.floor((height - (offsetTop * v)));
                    _values += Math.floor((i + 1) * offsetLeft) + ", " + _y + " ";
				});
				_values += $("svg").outerWidth() + "," + height + " ";
				//_values += (data.length + 1) * offsetLeft + "," + height + " ";
				_pts.setAttribute("points", _values);
				//_pts.setAttribute("stroke", color);
				_pts.setAttribute("fill", color);
				_pts.setAttribute("stroke-linejoin", "round");
				_pts.setAttribute("stroke-linecap", "round");
				
				
				_label.setAttribute("x", (data.length * offsetLeft) + 10);
				_label.setAttribute("y", _labelY);
				_label.setAttribute("fill", color);
				_label.innerHTML = label;
				
				_line.setAttribute("data-action", "toggle");
				_line.appendChild(_pts);
				_line.appendChild(_label);
            
            return _line;
      }
    }
  };
/* --------------------------------------------------	
-------------------------------------------------- */
  return jk;
})(jQuery);