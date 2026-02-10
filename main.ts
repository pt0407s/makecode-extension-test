/**
 * Geometry helper functions for MakeCode Arcade
 */
//% color=#6a5acd icon="\uf1ec"
namespace geometry {

    /**
     * Distance between two sprites (pixels)
     */
    //% block="distance between %a and %b"
    //% a.shadow=variables_get
    //% b.shadow=variables_get
    export function distanceBetweenSprites(a: Sprite, b: Sprite): number {
        let dx = a.x - b.x
        let dy = a.y - b.y
        return Math.sqrt(dx * dx + dy * dy)
    }

    /**
     * Angle from sprite A to sprite B (degrees)
     */
    //% block="angle from %a to %b"
    export function angleBetweenSprites(a: Sprite, b: Sprite): number {
        return Math.atan2(b.y - a.y, b.x - a.x) * 180 / Math.PI
    }

    /**
     * Angle from sprite to position (x, y)
     */
    //% block="angle from %sprite to x %x y %y"
    export function angleToPosition(sprite: Sprite, x: number, y: number): number {
        return Math.atan2(y - sprite.y, x - sprite.x) * 180 / Math.PI
    }

    /**
     * Clamp a number between min and max
     */
    //% block="clamp %value between %min and %max"
    export function clamp(value: number, min: number, max: number): number {
        if (value < min) return min
        if (value > max) return max
        return value
    }

    /**
     * Map a number from one range to another
     */
    //% block="map %value from %fromMin-%fromMax to %toMin-%toMax"
    export function mapRange(
        value: number,
        fromMin: number,
        fromMax: number,
        toMin: number,
        toMax: number
    ): number {
        return (value - fromMin) * (toMax - toMin) / (fromMax - fromMin) + toMin
    }
}
