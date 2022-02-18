var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "container-main container" }, [
      _c("h1", { staticClass: "heading" }, [_vm._v("ヘルプ")]),
      _vm._v(" "),
      _c("div", { staticClass: "container" }, [
        _c("h3", { staticClass: "border-bottom" }, [
          _vm._v("当サイトについて")
        ]),
        _vm._v(" "),
        _c("p", [
          _vm._v(
            "本サービスはスクロール量をスコアとしてランク付けをすることができるサービスです。スクロール量の単位はpx（ピクセル）なので、利用者の端末の画面によって変わります。ちなみに、テストでスマホが効率が良いことが確認済みです。"
          )
        ]),
        _vm._v(" "),
        _c("h3", { staticClass: "border-bottom m-2" }, [_vm._v("環境")]),
        _vm._v(" "),
        _c("table", { attrs: { border: "1", width: "100%" } }, [
          _c("thead", { staticClass: "table-head" }, [
            _c("tr", [
              _c("th", { staticClass: "p-2" }),
              _vm._v(" "),
              _c("th", { staticClass: "p-2" }, [_vm._v("言語")])
            ])
          ]),
          _vm._v(" "),
          _c("tbody", [
            _c("tr", [
              _c("td", { staticClass: "p-2" }, [_vm._v("Webサーバー")]),
              _vm._v(" "),
              _c("td", { staticClass: "p-2" }, [_vm._v("Apache")])
            ]),
            _vm._v(" "),
            _c("tr", [
              _c("td", { staticClass: "p-2" }, [_vm._v("フロントエンド言語")]),
              _vm._v(" "),
              _c("td", { staticClass: "p-2" }, [_vm._v("Vue.js(JavaScript)")])
            ]),
            _vm._v(" "),
            _c("tr", [
              _c("td", { staticClass: "p-2" }, [_vm._v("バックエンド言語")]),
              _vm._v(" "),
              _c("td", { staticClass: "p-2" }, [_vm._v("Laravel(PHP)")])
            ]),
            _vm._v(" "),
            _c("tr", [
              _c("td", { staticClass: "p-2" }, [_vm._v("データベース")]),
              _vm._v(" "),
              _c("td", { staticClass: "p-2" }, [_vm._v("PostgreSQL")])
            ])
          ])
        ]),
      ])
    ])
  }
]