modules.define('page', ['i-bem__dom', 'loader_type_js', 'jquery'], function(provide, DOM, loader, $) {

    DOM.decl('page', {
        onSetMod : {
           /**
            * Выполняется при инициализации блока
            */
            'js' : {
                'inited' : function() {
                    this._bgColor();
                    this._drawArt();
                    $( '#art').attr( "filter", "url(#generator)");
                }
            }
        },

        _bgColor : function() {
            var color = this._colorPicker();
            $( '#bg' ).attr( "fill", color );
        },

        _drawArt : function() {
            config = document.getElementById("generator-config");
            config.setAttribute("baseFrequency", '0.00' + Math.floor((Math.random() * 9) + 1));
            config.setAttribute("numOctaves", Math.floor((Math.random() * 5) + 2));
        },

        _randomInt : function(max) {

        },

        _colorPicker : function() {
            var colors = [
              "#1abc9c",
              "#2ecc71",
              "#3498db",
              "#9b59b6",
              "#34495e"
            ];

            return colors[Math.floor((Math.random() * colors.length) + 1)];
        }
    });

    provide(DOM);
});
