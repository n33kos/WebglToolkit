!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("NEWT",[],t):"object"==typeof exports?exports.NEWT=t():e.NEWT=t()}(global,function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=15)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.x=t,this.y=n,this.z=o}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r=n(0),i=(o=r)&&o.__esModule?o:{default:o};t.default=function e(t){var n=t.A,o=void 0===n?new i.default:n,r=t.B,a=void 0===r?new i.default:r,l=t.C,u=void 0===l?new i.default:l;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.A=o,this.B=a,this.C=u}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function e(t){var n=t.context,o=void 0===n?null:n,r=t.shaders,i=void 0===r?null:r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var a=o.createProgram();i.forEach(function(e){o.attachShader(a,e)}),o.linkProgram(a),o.getProgramParameter(a,o.LINK_STATUS)?(o.validateProgram(a),o.getProgramParameter(a,o.VALIDATE_STATUS)?(this.shaders=i,this.program=a):console.error("ERROR validating shader program",o.getProgramInfoLog(a))):console.error("ERROR linking shader program",o.getProgramInfoLog(a))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function e(t){var n=t.context,o=void 0===n?null:n,r=t.source,i=void 0===r?null:r,a=t.type,l=void 0===a?null:a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var u=o.createShader(o[l]);o.shaderSource(u,i),o.compileShader(u),o.getShaderParameter(u,o.COMPILE_STATUS)?(this.source=i,this.shader=u):console.error("Could not compile "+l,o.getShaderInfoLog(u))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});i(n(3)),i(n(2));var o=i(n(12)),r=i(n(11));function i(e){return e&&e.__esModule?e:{default:e}}var a={flatVertex:o.default,flatFragment:r.default};t.default=function e(t){t.context;var n=t.type,o=void 0===n?null:n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var r=new NEWT.Shader({context:ctx,source:a[o+"Vertex"],type:"VERTEX_SHADER"}),i=new NEWT.Shader({context:ctx,source:a[o+"Fragment"],type:"FRAGMENT_SHADER"}),l=new NEWT.ShaderProgram({context:ctx,shaders:[r.shader,i.shader]});this.vertexShader=r,this.fragmentShader=i,this.shaderProgram=l}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return e*Math.PI/180}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return 180*e/Math.PI}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.x=t,this.y=n,this.z=o,this.w=r}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.x=t,this.y=n}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();var r=function(){function e(t){var n=t.canvas,o=void 0===n?null:n,r=t.color,i=void 0===r?null:r,a=t.font,l=void 0===a?null:a,u=t.position,s=void 0===u?null:u,c=t.text,f=void 0===c?null:c;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.canvas=o,this.color=i,this.font=l,this.position=s,this.text=f}return o(e,[{key:"draw",value:function(){canvas.context2D.font=this.font,canvas.context2D.fillStyle="rgba("+this.color.x+", "+this.color.y+", "+this.color.z+", "+this.color.w+")",canvas.context2D.fillText(this.text,this.position.x,this.position.y)}}]),e}();t.default=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=i(n(1)),r=i(n(4));function i(e){return e&&e.__esModule?e:{default:e}}t.default=function e(t){var n=t.geometry,i=void 0===n?new o.default:n,a=t.material,l=void 0===a?new r.default("flat"):a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.geometry=i,this.material=l}},function(e,t,n){"use strict";n.r(t),t.default="\n\n    precision mediump float;\n\n    varying vec3 fragColor;\n\n    void main()\n    {\n      gl_FragColor = vec4(fragColor, 1);\n    }\n\n"},function(e,t,n){"use strict";n.r(t),t.default="\n\n  precision mediump float;\n\n  attribute vec2 vertPosition;\n  attribute vec3 vertColor;\n\n  varying vec3 fragColor;\n\n  void main()\n  {\n    fragColor = vertColor;\n    gl_Position = vec4(vertPosition, 0.0, 1.0);\n  }\n\n"},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();var r=function(){function e(t){var n=t.context,o=void 0===n?null:n,r=t.vertices,i=void 0===r?null:r,a=t.program,l=void 0===a?null:a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var u=o.createBuffer();o.bindBuffer(o.ARRAY_BUFFER,u),o.bufferData(o.ARRAY_BUFFER,new Float32Array(i),o.STATIC_DRAW),this.buffer=u,this.program=l,this.attachVertexBufferDataToAttributes(l,o)}return o(e,[{key:"attachVertexBufferDataToAttributes",value:function(e,t){var n=t.getAttribLocation(e,"vertPosition");t.vertexAttribPointer(n,2,t.FLOAT,t.FALSE,5*Float32Array.BYTES_PER_ELEMENT,0);var o=t.getAttribLocation(e,"vertColor");t.vertexAttribPointer(o,3,t.FLOAT,t.FALSE,5*Float32Array.BYTES_PER_ELEMENT,2*Float32Array.BYTES_PER_ELEMENT),t.enableVertexAttribArray(n),t.enableVertexAttribArray(o)}}]),e}();t.default=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();var r=function(){function e(t){var n=t.color,o=void 0===n?new Vector4(1,1,1,1):n,r=t.element,i=void 0===r?null:r;t.height,t.width;if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),null!==i){var a=document.getElementById(i),l=a.getContext("webgl");try{this.canvas=a,this.color=o,this.context=l,this.element=a,this.create2DContext(a),this.setElementDimensions(a,a.offsetHeight,a.offsetWidth),this.setContextViewport(a,l),this.clearCanvas(l,o)}catch(e){console.log("Could Not Initialize WebGL"),console.error(e)}}else console.log("Please pass a canvas element to initialize")}return o(e,[{key:"setElementDimensions",value:function(e,t,n){e.setAttribute("width",n),e.setAttribute("height",t)}},{key:"setContextViewport",value:function(e,t){t.viewport(0,0,e.offsetWidth,e.offsetHeight)}},{key:"clearCanvas",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.context,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.color;e.clearColor(t.x,t.y,t.z,t.w),e.clear(e.COLOR_BUFFER_BIT|e.DEPTH_BUFFER_BIT)}},{key:"create2DContext",value:function(e){var t=e.cloneNode(!0);this.setElementDimensions(t,e.offsetHeight,e.offsetWidth),t.setAttribute("id",e.id+"2D"),t.style.position="absolute",t.style.left=e.offsetLeft+"px",t.style.top=e.offsetTop+"px",e.parentNode.insertBefore(t,e.nextSibling),this.canvas2D=t,this.context2D=t.getContext("2d")}}]),e}();t.default=r},function(e,t,n){"use strict";var o=g(n(14)),r=g(n(13)),i=g(n(4)),a=g(n(10)),l=g(n(3)),u=g(n(2)),s=g(n(9)),c=g(n(1)),f=g(n(8)),d=g(n(0)),v=g(n(7)),h=g(n(6)),p=g(n(5));function g(e){return e&&e.__esModule?e:{default:e}}var y={Canvas:o.default,GeometryBuffer:r.default,Material:i.default,Mesh:a.default,Shader:l.default,ShaderProgram:u.default,Text2D:s.default,Triangle:c.default,Vector2:f.default,Vector3:d.default,Vector4:v.default,degToRad:h.default,radToDeg:p.default};void 0!==e&&void 0!==e.exports?e.exports=y:window.NEWT=y}])});