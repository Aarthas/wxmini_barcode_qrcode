// pages/main/index.js
var QR =
    require( "../../js/qrcode/qrcode.js" );
var barcode =
    require( "../../js/qrcode/barcode.js" );

var UiUtils = require( "../../js/UiUtils.js" );

var module;
var st;
var page ;
Page( {
    data: {
        barcode: '123124321117',
    },


    onLoad: function ( options )
    {
        page = this;
        module = new Module();
        module.loadCardCode()


    },
    onReady: function ()
    {


    },
    onShow: function ()
    {
        module.loadCardCode()
        // 页面显示
    },
    onHide: function ()
    {
        // 页面隐藏
    },

    onUnload: function ()
    {
        // 页面关闭

    },

    render: function ( card )
    {
        var w = UiUtils.rpx2px( 660 )
        var h = UiUtils.rpx2px( 200 )
        console.log( w );
        console.log( h );
        barcode.createBarcode( 'barcodeCanvas', card, w, h );
        var w2 = UiUtils.rpx2px( 500 )
        QR.qrApi.draw( card, "qrcodeCanvas", w2, w2 );
        var code = barcode.formatBarCode( card, " " )

        this.setData( {
            barcode: code
        } )

        clearTimeout( st );
        st = setTimeout( function ()
            {
                module.loadCardCode()
                clearTimeout( st );
            },
            10 * 1000
            // 4000
        );
    },


    refresh: function ( e )
    {

        module.loadCardCode()
    }


} )




class Module {


    constructor(  )
    {

    }

    loadCardCode()
    {

        page.render( "123124321117" );

    }
}