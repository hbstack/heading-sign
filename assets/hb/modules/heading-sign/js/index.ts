import * as params from '@params';

(() => {
    document.addEventListener('DOMContentLoaded', () => {
        const containers = params?.heading_sign?.containers
        if (!containers) {
            return
        }

        const symbol = params?.heading_sign?.symbol ?? '§'

        for (const selector in containers) {
            const container = document.querySelector(selector)
            if (!container) {
                continue
            }
            container.querySelectorAll("h2, h3, h4, h5, h6").forEach((heading) => {
                const id = heading.getAttribute('id')
                if (!id) {
                    return
                }

                const anchor = document.createElement('a')
                anchor.className = 'anchor ms-1'
                anchor.href = `#${id}`
                anchor.innerText = symbol
                heading.appendChild(anchor)
            })
        }
    })
})()
