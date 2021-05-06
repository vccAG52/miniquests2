// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1e001e00010101010101010101010101010101010505060606050606040604060405010101010101010101010101010101010105060606050606060606060605010101010101010101010101010101010105060606070606060606060605010101010101010101010101010101010105060605050505070505050505010101010101010101010101010101010105050705060606060606060605010101010101010101010101010101020205060605070505050505050505010101010101010101010101010101010105060605060606040606090305010101010101010101010101010101010105060605060606060606060605010101010101010101010101010101010105060605060606060606060605010101010101010101010101010202020205070505050505050505050505010101010101010202020202020202020202080504040604040a04040a0408020202020202020202020202020202020208050606060606060606060608080808080808080808080808080808080808050a0a060a0a0a0a0a0a0a02020202020202020202020202020202020208050a0a060a0a0a0b0a0a0a02020202020202020202020202020202020208050a0a060a0a0a0a0a0a0a02020202020202020202020202020202020208050a0a060a0a0a0a0a0a0a02020202020202020202020202020202020208050a0a060a0a0a0a0a0a0a02020202020202020202020202020202020208050a0a060a0a0a0a0a0a0a020202020202020202020202020202020202080505050705050505050505020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202`, img`
...22222222.222222...2.......2
...222..........22...2.......2
...222.22.22222222...........2
2.2222.22.22222222..2222.22222
2.2.....2.222222222.2........2
2.222.22..22222222..2.22222222
2.....22.222222222..2........2
222222...222222222..2........2
222222.22222222222..2........2
.......222222....2.22222222222
.222222............2..........
...................2..........
...................2..........
...................2..........
...................2..........
...................2..........
...................2..........
...................2..........
...................222.2222222
..............................
..............................
..............................
..............................
..............................
..............................
..............................
..............................
..............................
..............................
..............................
`, [myTiles.transparency16,sprites.builtin.forestTiles0,sprites.castle.tileGrass2,myTiles.tile1,myTiles.tile2,sprites.builtin.brick,myTiles.tile3,myTiles.tile4,sprites.dungeon.floorLight0,myTiles.tile5,myTiles.tile6,myTiles.tile7], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile1":
            case "tile3":return tile3;
            case "myTile2":
            case "tile4":return tile4;
            case "myTile3":
            case "tile5":return tile5;
            case "myTile4":
            case "tile6":return tile6;
            case "myTile5":
            case "tile7":return tile7;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
