modules.define('svg', ['i-bem__dom', 'loader_type_js', 'jquery'], function(provide, DOM, loader, $) {

    DOM.decl('svg', {
        onSetMod : {
           /**
            * Выполняется при инициализации блока
            */
            'js' : {
                'inited' : function() {
                    this._bgColor();
                }
            }
        },

        _bgColor : function() {
            var color = this._colorPicker();
            debugger;


        },

        _glitch : function() {

        },

        _drawRect : function() {

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
          debugger;

          return Math.floor((Math.random() * colors.lenght) + 1);
        }
    });

    provide(DOM);
});
