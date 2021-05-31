"use strict";
exports.__esModule = true;
var react_1 = require("react");
var styles_1 = require("@material-ui/core/styles");
var GridList_1 = require("@material-ui/core/GridList");
var GridListTile_1 = require("@material-ui/core/GridListTile");
var GridListTileBar_1 = require("@material-ui/core/GridListTileBar");
var IconButton_1 = require("@material-ui/core/IconButton");
var StarBorder_1 = require("@material-ui/icons/StarBorder");
var tileData_1 = require("./tileData");
var useStyles = styles_1.makeStyles(function (theme) {
    return styles_1.createStyles({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            overflow: 'hidden',
            backgroundColor: theme.palette.background.paper
        },
        gridList: {
            flexWrap: 'nowrap',
            // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
            transform: 'translateZ(0)'
        },
        title: {
            color: theme.palette.primary.light
        },
        titleBar: {
            background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)'
        }
    });
});
/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
function SingleLineGridList() {
    var classes = useStyles();
    return (react_1["default"].createElement("div", { className: classes.root },
        react_1["default"].createElement("br", null),
        react_1["default"].createElement("br", null),
        react_1["default"].createElement("h4", null, "Trending"),
        react_1["default"].createElement(GridList_1["default"], { className: classes.gridList, cols: 2.5 }, tileData_1.tileData.map(function (tile) { return (react_1["default"].createElement(GridListTile_1["default"], { key: tile.img },
            react_1["default"].createElement("img", { src: tile.img, alt: tile.title }),
            react_1["default"].createElement(GridListTileBar_1["default"], { title: tile.title, classes: {
                    root: classes.titleBar,
                    title: classes.title
                }, actionIcon: react_1["default"].createElement(IconButton_1["default"], { "aria-label": "star " + tile.title },
                    react_1["default"].createElement(StarBorder_1["default"], { className: classes.title })) }))); }))));
}
exports["default"] = SingleLineGridList;
