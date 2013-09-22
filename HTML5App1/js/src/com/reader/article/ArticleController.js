fm.Package("com.reader.article");
fm.Import("com.reader.source.Sources");
fm.Import("com.reader.setting.Settings");
fm.Import("lib.FillContent")
fm.Class("ArticleController", 'jfm.dom.Controller');
com.reader.article.ArticleController = function (me, Articles, Sources, FillContent, Settings) {
    'use strict';
    this.setMe = function (_me) { me = _me; };
    var fontChange;
    this.onStart = function (pathInfo, cb) {
        Sources.getInstance().getArticles(parseInt(pathInfo.sourceId), function (articles) {
            me.article = articles.getById(parseInt(pathInfo.articleId));
            cb();

            fontChange = Settings.getInstance().on('fontSize,color_class,window-resize', function () {
                create(me.article.content);
            });
        });
    };

    this.afterRender = function(){
        create(me.article.content);
        move(me.articleContainer);
    };

    this.onStop = function () {
        fontChange && fontChange();
        renderComplete(0, 0);
        clearTimeout(setTimeOut);
    };

    this.ArticleController = function (lastState) {

    };
    function getWidth(fs) {
        var w = jQuery(window).width(), cw = fs * multi;
        return Math.min(w - 40, cw);
    }
    var multi = 18;
    var setTimeOut;
    function create(data) {
        data = "<h1 class='title'>" + me.article.title + "</h1>" + data;
        var articleContainer = $("#articleContainer").empty();
        var articalWidth = getWidth(Settings.getInstance().fontSize), margins = 0;
        articleContainer.parent().css('fontSize', Settings.getInstance().fontSize);
        var trancatedLength = [0, 1];
        var htm = "<div class='parent selector'><div class='s'></div></div>";
        clearTimeout(setTimeOut);
        var bodyHeight = window.innerHeight - articleContainer.offset().top - 10;
        var content = new FillContent();
        var i = 0;
        function recursive() {
            var removeHeight = margins + 30;
            if (trancatedLength[1] <= 0) {
                renderComplete(1, i);
                articleContainer.append('<br style="clear:both" />');
                return;
            }
            i++;
            var elem;
            articleContainer.width((i) * (articalWidth + 40));
            elem = $(htm).appendTo(articleContainer);
            elem.find("div.s").height(bodyHeight - removeHeight - 10).width(articalWidth);
            trancatedLength = content.truncateWithHeight(elem.find("div.s"), trancatedLength[0], data);
            setTimeOut = setTimeout(recursive, 10);
        }
        recursive();
    }


    function move(elem) {
        var current; elem = $(elem);
        $(document).off('keydown swiperight swipeleft').on('keydown swiperight swipeleft', function (e, data) {
            var elemets = elem.find(".selector");
            current = current && current.filter(":visible").length && current || elemets.eq(0);
            var changed = false;
            var keyCode = e.type === 'swipeleft'? 39 : e.type === 'swiperight' ? 37 : e.keyCode; 
            switch (keyCode) {
                case 37: {
                    if (current.prev().length) {
                        current.removeClass('selected');
                        current = current.prev();
                        changed = true;
                    }
                    break;
                }
                case 39: {
                    if (current.next().length && current.next()[0].nodeName !== "BR") {
                        current.removeClass('selected');
                        current = current.next();
                        changed = true;
                    }
                    break;
                }
            }
            if (changed) {
                renderComplete(current.index() + 1);
                current.addClass('selected');
                scrollIntoView(current, elem);
            }
        });
    };
    function scrollIntoView(element, elem) {
        elem = elem.parent();
        var containerLeft = elem.scrollLeft();
        var containerRight = containerLeft + elem.width();
        var elemLeft = element[0].offsetLeft - elem[0].offsetLeft;
        var elemRight = elemLeft + element.width() + 10;
        if (elemLeft < containerLeft) {
            elem.animate({scrollLeft:elemLeft});
        }
        else if (elemRight > containerRight) {
            elem.animate({scrollLeft:elemRight - elem.width()} );
        }
    }
    var total;
    function renderComplete(page, t) {
        total = t === undefined ? total : t;
        $(document).trigger('page_info', {
            colNumber: page,
            totalCol: total
        });
    }
};
