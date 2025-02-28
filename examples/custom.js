/*
 * Unofficial API for Ray.So that turns your code into beautiful images.
 * Choose from a range of syntax colors, hide or show the background, and
 * toggle between a dark and light window.
 *
 * Source: ray.so
 * Author: github.com/s0ftik3
 */

import RaySo, {
    CardTheme,
    CardPadding,
    CardProgrammingLanguage,
} from '../index.js'
const raySo = new RaySo({
    title: 'Custom Title',
    theme: CardTheme.TAILWIND,
    padding: CardPadding.md,
    width: null,
    language: CardProgrammingLanguage.JSON,
    debug: true,
    localPreview: true,
    localPreviewPath: '/Users/rf0x3d/',
})

raySo
    .cook(`console.log('Hello, World!');`)
    .then(response => {
        console.log(
            '> Received an image buffer. Buffer length: %s',
            response.length
        )
    })
    .catch(err => {
        console.error(err)
    })
