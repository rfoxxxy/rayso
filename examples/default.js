/*
 * Unofficial API for Ray.So that turns your code into beautiful images.
 * Choose from a range of syntax colors, hide or show the background, and
 * toggle between a dark and light window.
 *
 * Source: ray.so
 * Author: github.com/s0ftik3
 */

import RaySo from '../index.js'
const raySo = new RaySo({})

raySo
    .cook(
        `const foo = () => console.log('This is the output with default parameters');`
    )
    .then(response => {
        console.log(
            '> Received an image buffer. Buffer length: %s',
            response.length
        )
    })
    .catch(err => {
        console.error(err)
    })
