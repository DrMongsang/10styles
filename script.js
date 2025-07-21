const questions = [
      {
        q: "服、なに重視？",
        options: [
          { text: "見た目", score: "キメラクさん" },
          { text: "ラクさ", score: "ゆるカジさん" },
          { text: "ちょうどよさ", score: "バランスさん" }
        ]
      },
      {
        q: "職場の雰囲気は？",
        options: [
          { text: "カチッと", score: "キメラクさん" },
          { text: "ゆるめ", score: "毎ラクさん" },
          { text: "自由", score: "ジャケはじさん" }
        ]
      },
      {
        q: "気になるのは？",
        options: [
          { text: "信頼感", score: "キメラクさん" },
          { text: "清潔感", score: "着こなしさん" },
          { text: "ラフすぎ注意", score: "バランスさん" }
        ]
      },
      {
        q: "洗濯は？",
        options: [
          { text: "気にしない", score: "ジャケはじさん" },
          { text: "家で洗いたい", score: "ゆるカジさん" },
          { text: "自信なし", score: "毎ラクさん" }
        ]
      },
      {
        q: "スーツ、どう思う？",
        options: [
          { text: "似合わない", score: "バランスさん" },
          { text: "嫌だけど必要", score: "着こなしさん" },
          { text: "意外と好き", score: "キメラクさん" }
        ]
      }
    ];

    const results = {
      "キメラクさん": {
        description: "信頼感も着心地も両立したスタイル。かちっと見えて、動きやすい！",
        scene: "大事な商談やプレゼンの日",
        challenge: "カチッとした服は窮屈で緊張する",
        benefit: "信頼感のある見た目と、気持ちも軽くなる着心地"
      },
      "毎ラクさん": {
        description: "毎日をちょうどよく過ごす、軽くて洗える味方スタイル。",
        scene: "通勤や日々の打ち合わせ",
        challenge: "スーツっぽさは必要だけど、堅すぎるのは嫌",
        benefit: "きちんと見えて、軽くて洗える毎日の味方"
      },
      "バランスさん": {
        description: "ラフだけどきちんと見える、絶妙バランス型セットアップ。",
        scene: "カジュアルOKな職場や外出先",
        challenge: "スーツだと浮く、でもちゃんとしたい",
        benefit: "軽くてラフ、でも「それなり」に見えるセットアップ"
      },
      "ジャケはじさん": {
        description: "脱スーツの新定番。清潔感と楽さを両立する服。",
        scene: "スーツ不要になった職場での普段着",
        challenge: "ラフすぎると不安、でもスーツっぽさは嫌",
        benefit: "ベーシックで清潔感、でも驚くほどラクな服"
      },
      "着こなしさん": {
        description: "迷わず着こなせる、日常を整えるジャケパンスタイル。",
        scene: "ジャケパンで過ごす日常",
        challenge: "自分に合う着こなしが分からない",
        benefit: "きちんと見える安心感と、迷わない着回し力"
      },
      "ゆるカジさん": {
        description: "TシャツもOK、でもラフすぎない。絶妙なカジュアルライン。",
        scene: "Tシャツやデニムが許される職場",
        challenge: "ただのラフになりすぎるのは避けたい",
        benefit: "カジュアルになじみつつ、さりげなく整う服"
      }
    };

    let current = 0;
    let scores = {};

    const app = document.getElementById("app");

    function renderTitleScreen() {
      app.innerHTML = `
        <div class="max-w-xl text-center">
          <h1 class="text-4xl font-bold mb-4">10matrixスタイルブック診断</h1>
          <p class="text-lg mb-8">あなたのファッションスタイルを診断します！</p>
          <button onclick="renderQuestion()" class="px-8 py-4 bg-gray-800 text-white text-xl rounded-xl hover:bg-gray-700">Start Diagnosis</button>
          <div class="mt-12 text-sm text-gray-500 space-y-1">
            <p>Developer: FUJIMO GAMES</p>
            <p>Planning: SESUKE NAKAGAWA, HISASH-C</p>
          </div>
        </div>
      `;
    }

    function renderQuestion() {
      const q = questions[current];
      app.innerHTML = `
        <div class="max-w-xl w-full">
          <h1 class="text-2xl font-semibold mb-6">Q${current + 1}. ${q.q}</h1>
          <div class="space-y-4">
            ${q.options.map((opt) => `
              <button onclick="selectAnswer('${opt.score}', '${opt.text}')" class="block w-full text-left border border-gray-300 rounded-xl px-4 py-3 hover:shadow-md">${opt.text}</button>
            `).join('')}
          </div>
        </div>
      `;
    }

    function selectAnswer(type, text) {
      scores[type] = (scores[type] || 0) + 1;
      current++;
      if (current < questions.length) {
        renderQuestion();
      } else {
        showResult();
      }
    }

    function showResult() {
      const resultType = Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
      const description = results[resultType].description;
      const scene = results[resultType].scene;
      const challenge = results[resultType].challenge;
      const benefit = results[resultType].benefit;
      const imageUrl = `images/${resultType}.png`; // 画像のパスを生成
      app.innerHTML = `
        <div class="max-w-xl text-center">
          <h1 class="text-3xl font-bold mb-4">あなたは「${resultType}」タイプ！</h1>
          <img src="${imageUrl}" alt="${resultType}" class="mx-auto mb-6 rounded-lg shadow-lg max-w-full h-auto" />
          <p class="text-lg mb-6">${description}</p>
          ${scene ? `<div class="text-left p-4 bg-gray-100 rounded-lg mb-4"><h2 class="font-semibold text-xl mb-2">着用シーン</h2><p>${scene}</p></div>` : ''}
          ${challenge ? `<div class="text-left p-4 bg-gray-100 rounded-lg mb-4"><h2 class="font-semibold text-xl mb-2">課題</h2><p>${challenge}</p></div>` : ''}
          ${benefit ? `<div class="text-left p-4 bg-gray-100 rounded-lg mb-4"><h2 class="font-semibold text-xl mb-2">便益</h2><p>${benefit}</p></div>` : ''}
          <button onclick="location.reload()" class="mt-4 px-6 py-3 bg-gray-800 text-white rounded-xl hover:bg-gray-700">もう一度診断する</button>
        </div>
      `;
    }

    // 初期表示
    renderTitleScreen();