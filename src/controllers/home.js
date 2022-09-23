const HomeController = {
  home(req, res) {
    res.status(200).send("Sate Sete to our Server!")
  }
}

module.exports = HomeController