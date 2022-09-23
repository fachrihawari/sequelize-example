const HomeController = {
  home(req, res) {
    res.status(200).send("Welcome to our Server!")
  }
}

module.exports = HomeController