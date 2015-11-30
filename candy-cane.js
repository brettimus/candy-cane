var CandyCane = (function(){
    var result = createFromSelector;

    var candyAPI = {
        addStripe: addStripe,
        render: function() { throw new Error("Must implement render method"); },
    };

    return result;

    function createFromSelector(selector, options) {
        /*
        stripes: N,
        colors: [color1, color2, color3,...]
        */
        options     = (options === undefined) ? {} : options;
        var element = document.querySelector(selector);
        var candy = createCandyFromRender(render);

        return candy.render();

        function render() {
            var linearGradient = getLinearGradientFromStripes(this.stripes);

            element.style.borderImage = linearGradient;
            element.style.borderRightWidth = "0";

            return this;
        }
    }

    function createCandyFromRender(render) {
        var candy = Object.create(candyAPI);
        candy.stripes = [];
        candy.render = render;
        return candy;
    }

    function addStripe(stripe) {
        this.stripes.push(stripe);
        this.render();
    }

    function getLinearGradientFromStripes(stripes) {
        var baseString = "linear-gradient(to top, %colors%) 1 100%";
        var colorArgs  = stripes.reduce(reduceStripesToLinearGradientArgs, "");
        var result = baseString.replace("%colors%", colorArgs);
        if (!colorArgs) {
            return "";
        }
        return result;
    }

    function reduceStripesToLinearGradientArgs(result, color, index, originalArray) {
        var numberOfColors = originalArray.length;
        var range = getPercentageRange(index, numberOfColors);

        result += color + " " + range.from + ", " + color + " " + range.to;

        if (index === numberOfColors - 1) {
            return result;
        }
        return result + ",";
    }

    function getPercentageRange(index, total) {
        return {
            from: (index/total)*100 + "%",
            to:   ((index+1)/total)*100 + "%",
        };
    }
})();