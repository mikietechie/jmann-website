const path = require("path")
const fs = require("fs")
const fse = require("fs-extra")
const axios = require("axios")

const pages = [
    {
        file_name: "index.html",
        route: "/",
    },
    {
        file_name: "about.html",
        route: "/about",
    },
    {
        file_name: "contact.html",
        route: "/contact",
    },
    {
        file_name: "store.html",
        route: "/store",
    },
    {
        file_name: "email.html",
        route: "/email",
    },
]

const buildDirPath = path.join(__dirname, "build")

try {
    fs.mkdirSync(buildDirPath)
    console.log("Build build dir")
} catch (_) {
    console.log("Build Dir already exists")
}

const index_url = `http://localhost:5000`
pages.forEach(async (p) => {
    const res = await axios.get(index_url + p.route)
    let content = String(res.data)
    pages.forEach((ip) => {
        content = content.replaceAll(`"${ip.route}"`, `"${ip.file_name}"`)
        content = content.replaceAll(`"${ip.route}?`, `"${ip.file_name}?`)
    })
    content = content.replaceAll(`/public/`, 'public/')
    fs.writeFileSync(
        path.join(buildDirPath, p.file_name),
        content
    )
    console.log(`On route ${p.route} with file ${p.file_name}`)
})

console.log("Copying Public")
fse.copySync(
    path.join(__dirname, "src", "public"),
    path.join(buildDirPath, "public"),
    {overwrite: true}
)
