({
    block : 'page',
    js : true,
    title : 'Генератор современного искусства',
    // favicon : '/favicon.ico',
    head : [
        { elem : 'meta', attrs : { name : 'description', content : '' } },
        { elem : 'css', url : 'index.css' }
    ],
    scripts : [{ elem : 'js', url : 'index.js' }],
    content : [
        {
          tag : 'svg',
          attrs : {
            version : '1.1',
            height : '100%',
            width : '100%',
            xmlns : 'http://www.w3.org/2000/svg',
            'xmlns:xlink' : 'http://www.w3.org/1999/xlink'
          },
          content : [
            {
              tag : 'rect',
              attrs : {
                id : 'bg',
                x : 0,
                y : 0,
                height : '100%',
                width : '100%'
              }
            },
            {
              tag : 'filter',
              attrs : {
                id : 'generator'
              },
              content : [
                {
                  tag : 'feTurbulence',
                  attrs : {
                    id : 'generator-config'
                  }
                },
                // {
                //   tag : 'feColorMatrix',
                //   attrs : {
                //     type : 'matrix',
                //     values : '0 0.01 0.02 0.04 0.05 0.06 0.07 0.08 0.1 0.11 0.12 0.14 0.15 0.16 0.17 0.18 0.20 0.21 0.22 0.24 0.25 0.27 0.28 0.30 0.32 0.34 0.36 0.38 0.40 0.42 0.44 0.46 0.48 0.5 0.53 0.56 0.59 0.62 0.65 0.68 0.71 0.74 0.77 0.80 0.83 0.86 0.89 0.92 0.95 0.98 1.0 1.06 1.12 1.18 1.24 1.30 1.36 1.42 1.48 1.54 1.60 1.66 1.72 1.78 1.84 1.90 1.96 2.0 2.12 2.25 2.37 2.50 2.62 2.75 2.87 3.0 3.2 3.4 3.6 3.8 4.0 4.3 4.7 4.9 5.0 5.5 6.0 6.5 6.8 7.0 7.3 7.5 7.8 8.0 8.4 8.7 9.0 9.4 9.6 9.8 10.0'
                //   }
                // }
              ]
            },
            {
              tag : 'rect',
              attrs : {
                x : 0,
                y : 0,
                height : '100%',
                width : '100%',
                id : 'art'
              }
            },
            // {
            //   tag : 'filter',
            //   attrs : {
            //     id : 'hue'
            //   },
            //   content : [
            //     {
            //       tag : 'feColorMatrix',
            //       attrs : {
            //         'color-interpolation-filters' : 'sRGB',
            //         'in' : 'SourceGraphic',
            //         'type' : 'matrix',
            //         'values' : '0.0157 0 0 0 0 0 0.3059 0 0 0  0 0 0.7765 0 0 0 0 0 1 0'
            //       }
            //     }
            //   ]
            // },
            // {
            //   tag : 'image',
            //   attrs : {
            //     x : 0,
            //     y : 0,
            //     height : '100%',
            //     width : '100%',
            //     'xlink:href' : '/sign.svg',
            //     // filter : 'url(#hue)'
            //   }
            // }
          ]
        }
    ]
})
