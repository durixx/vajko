

function DurixUiDataSource(obj) {
    this.data = "xxx";
    this.read = function () {
        console.log("a");
    };
    var dataSource = {
        _data: [],
        _serverData: [],
        options: {
            schema: {

            },
            transport: {
                read: {
                    url: "",
                    dataType: "json"
                },
                update: {
                    url: "",
                    dataType: "json"
                },
                delete: {
                    url: "",
                    dataType: "json"
                }
            }
        }
    };

    var transp = $.extend(true, dataSource.options, obj);
    dataSource.options = transp;
    dataSource.read = function () {
        console.log(a);
    };
    return this;
}


$.fn.durixGrid = function (obj) {
    var data = {
        container: this
    };

    this.append("<div class=\"dx-container\">\n" +
        "            <div class=\"dx-grid\">\n" +
        "                <div class=\"dx-container-row-g1\">\n" +
        "                    <div class=\"dx-grid-header dx-ds-color\"></div>\n" +
        "                </div>\n" +
        "                <div class=\"dx-container-row-g1\">\n" +
        "                    <div class=\"dx-grid-body\">\n" +
        "                        <div class=\"dx-container-row-g1\">\n" +
        "                            <div class=\"dx-grid-column-header\"></div>\n" +
        "                        </div>\n" +
        "                        <div class=\"dx-container-row-g1\">\n" +
        "                            <div class=\"dx-grid-column-body\"></div>\n" +
        "                        </div>\n" +
        "                    </div>\n" +
        "                </div>\n" +
        "                <div class=\"dx-container-row-g1\">\n" +
        "                    <div class=\"dx-grid-footer\">\n" +
        "                        <div class=\"dx-column-basis-36px dx-justify-content-center dx-align-items-center\">\n" +
        "                            <div class=\"dx-shapes-rectangle-1x10\"></div>\n" +
        "                            <div class=\"dx-shapes-triangle-left-5px \"></div>\n" +
        "                        </div>\n" +
        "                        <div class=\"dx-column-basis-36px dx-justify-content-center dx-align-items-center\">\n" +
        "                            <div class=\"dx-shapes-triangle-left-5px \"></div>\n" +
        "                        </div>\n" +
        "                        <div class=\"dx-column-basis-72px\"></div>\n" +
        "                        <div class=\"dx-column-basis-36px dx-justify-content-center dx-align-items-center\">\n" +
        "                            <div class=\"dx-shapes-triangle-right-5px \"></div>\n" +
        "                        </div>\n" +
        "                        <div class=\"dx-column-basis-36px dx-justify-content-center dx-align-items-center\">\n" +
        "                            <div class=\"dx-shapes-triangle-right-5px \"></div>\n" +
        "                            <div class=\"dx-shapes-rectangle-1x10\"></div>\n" +
        "                        </div>\n" +
        "                        <div class=\"dx-column-grow-x1\"></div>\n" +
        "                        <div class=\"dx-column-basis-36px dx-justify-content-center dx-align-items-center\">\n" +
        "                            <div class=\"dx-ico-refresh\"></div>\n" +
        "                        </div>\n" +
        "                    </div>\n" +
        "                </div>\n" +
        "            </div>\n" +
        "        </div>");
};