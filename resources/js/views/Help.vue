<template>
  <div id="help">
    <Header />
    <div class="container">
      <h1 class="heading">ヘルプ</h1>
      <h3 class="border-bottom">当サイトについて</h3>
      <p>本サービスはスクロール量をスコアとしてランク付けをすることができるサービスです。スクロール量の単位はpx（ピクセル）なので、利用者の端末の画面によって変わります。ちなみに、テストでスマホが効率が良いことが確認済みです。</p>

      <h3 class="border-bottom m-2">環境</h3>
      <p>
      <table border="1" width="100%">
        <thead class="table-head">
          <tr>
            <th class="p-2"></th>
            <th class="p-2">言語</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="p-2">Webサーバー</td>
            <td class="p-2">Apache</td>
          </tr>
          <tr>
            <td class="p-2">フロントエンド言語</td>
            <td class="p-2">Vue.js(JavaScript)</td>
          </tr>
          <tr>
            <td class="p-2">バックエンド言語</td>
            <td class="p-2">Laravel(PHP)</td>
          </tr>
          <tr>
            <td class="p-2">データベース</td>
            <td class="p-2">PostgreSQL</td>
          </tr>
        </tbody>
      </table>
      </p>

      <h3 class="border-bottom">禁止事項</h3>
      当サイトの利用者は以下の行為をしてはなりません。
      <ol>
        <li>法令または公序良俗に違反する行為</li>
        <li>犯罪行為に関連する行為</li>
        <li>本サービスの内容等，本サービスに含まれる著作権，商標権ほか知的財産権を侵害する行為</li>
        <li>運営者，ほかのユーザー，またはその他第三者のサーバーまたはネットワークの機能を破壊したり，妨害したりする行為</li>
        <li>本サービスによって得られた情報を商業的に利用する行為</li>
        <li>運営者のサービスの運営を妨害するおそれのある行為</li>
        <li>不正アクセスをし，またはこれを試みる行為</li>
        <li>他のユーザーに関する個人情報等を収集または蓄積する行為</li>
        <li>不正な目的を持って本サービスを利用する行為</li>
        <li>本サービスの他のユーザーまたはその他の第三者に不利益，損害，不快感を与える行為</li>
        <li>他者に成りすます行為</li>
        <li>運営者が許諾しない本サービス上での宣伝，広告，勧誘，または営業行為</li>
        <li>面識のない人物との出会いを目的とした行為</li>
        <li>本サービスに関連して，反社会的勢力に対して直接または間接に利益を供与する行為</li>
        <li>その他，運営者が不適切と判断する行為</li>
      </ol>
      <h3 class="border-bottom">注意事項</h3>
      <p>
        <ul>
          <li>本サービスは予告なく停止または中断する場合があります。</li>
          <li>運営者は本サービスに起因してユーザーに生じたあらゆる損害について一切の責任を負いません。</li>
        </ul>
      </p>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
export default {
  components: {
    Header,
    Footer
  },
mounted() {
    document.title = 'スクロール大会 | ヘルプ';
    document.querySelector('meta[name="description"]').setAttribute('content', 'help me erinnnnnnnnnn!!!!!!!');
  },
}
</script>
