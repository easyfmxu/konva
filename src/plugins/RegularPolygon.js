(function() {
    /**
     * RegularPolygon constructor.&nbsp; Examples include triangles, squares, pentagons, hexagons, etc.
     * @constructor
     * @memberof Konva
     * @augments Konva.Shape
     * @param {Object} config
     * @param {Number} config.sides
     * @param {Number} config.radius
     * @@shapeParams
     * @@nodeParams
     * @example
     * var hexagon = new Konva.RegularPolygon({
     *   x: 100,
     *   y: 200,
     *   sides: 6,
     *   radius: 70,
     *   fill: 'red',
     *   stroke: 'black',
     *   strokeWidth: 4
     * });
     */
    Konva.RegularPolygon = function(config) {
        this.___init(config);
    };

    Konva.RegularPolygon.prototype = {
        ___init: function(config) {
            // call super constructor
            Konva.Shape.call(this, config);
            this.className = 'RegularPolygon';
            this.sceneFunc(this._sceneFunc);
        },
        _sceneFunc: function(context) {
            var sides = this.attrs.sides,
                radius = this.attrs.radius,
                n, x, y;

            context.beginPath();
            context.moveTo(0, 0 - radius);

            for(n = 1; n < sides; n++) {
                x = radius * Math.sin(n * 2 * Math.PI / sides);
                y = -1 * radius * Math.cos(n * 2 * Math.PI / sides);
                context.lineTo(x, y);
            }
            context.closePath();
            context.fillStrokeShape(this);
        }
    };
    Konva.Util.extend(Konva.RegularPolygon, Konva.Shape);

    // add getters setters
    Konva.Factory.addGetterSetter(Konva.RegularPolygon, 'radius', 0);

    /**
     * set radius
     * @name setRadius
     * @method
     * @memberof Konva.RegularPolygon.prototype
     * @param {Number} radius
     */

     /**
     * get radius
     * @name getRadius
     * @method
     * @memberof Konva.RegularPolygon.prototype
     */

    Konva.Factory.addGetterSetter(Konva.RegularPolygon, 'sides', 0);

    /**
     * set number of sides
     * @name setSides
     * @method
     * @memberof Konva.RegularPolygon.prototype
     * @param {int} sides
     */

    /**
     * get number of sides
     * @name getSides
     * @method
     * @memberof Konva.RegularPolygon.prototype
     */

    Konva.Collection.mapMethods(Konva.RegularPolygon);
})();
