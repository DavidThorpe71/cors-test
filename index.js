const express = require('express')
const app = express()
const port = 3000

app.get('/', async (req, res) => {
  res.cookie("dt-cooks", "abcd1234")
  res.send(`
<button onclick="dt()">click me</button>
<script>
    const dt = async () => {
      const apiRes = await fetch("http://localhost:3030/api", {
        credentials: "include"
      })
  
      const text = await apiRes.text()
      console.log(text)
      return "blah"
    }
</script>
`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
