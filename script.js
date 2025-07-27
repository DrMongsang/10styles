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
        description: "信頼感も着心地も両立したスタイル。<br>かちっと見えて、<br>動きやすい！",
        scene: "大事な商談やプレゼンの日",
        challenge: "カチッとした服は窮屈で緊張する",
        benefit: "信頼感のある見た目と、<br>気持ちも軽くなる着心地",
        urls: {
          "通年": [
            {
              name: "Premium",
              url: "https://fabric-tokyo.com/products/list/light-suit-lp-premium?co_ord_set=type"
            },
            {
              name: "Stretch Wool",
              url: "https://fabric-tokyo.com/products/list/light-suit-lp-stretch-wool?co_ord_set=type"
            },
            {
              name: "Jersey",
              url: "https://fabric-tokyo.com/products/list/light-suit-lp-jersey"
            }
          ],
          "シーズン": [
            {
              name: "Cool",
              url: "https://fabric-tokyo.com/products/list/light-suit-lp-cool"
            }
          ]
        }
      },
      "毎ラクさん": {
        description: "毎日をちょうどよく過ごす、<br>軽くて洗える味方スタイル。",
        scene: "通勤や日々の打ち合わせ",
        challenge: "スーツっぽさは必要だけど、<br>堅すぎるのは嫌",
        benefit: "きちんと見えて、<br>軽くて洗える毎日の味方",
        urls: {
          "通年": [
            {
              name: "Stretch Wool",
              url: "https://fabric-tokyo.com/products/list/light-suit-lp-stretch-wool?co_ord_set=type"
            },
            {
              name: "Jersey",
              url: "https://fabric-tokyo.com/products/list/light-suit-lp-jersey"
            }
          ],
          "シーズン": [
            {
              name: "Cool",
              url: "https://fabric-tokyo.com/products/list/light-suit-lp-cool"
            }
          ]
        }
      },
      "バランスさん": {
        description: "ラフだけどきちんと見える、<br>絶妙バランス型セットアップ。",
        scene: "カジュアルOKな職場や外出先",
        challenge: "スーツだと浮く、<br>でもちゃんとしたい",
        benefit: "軽くてラフ、<br>でも「それなり」に見えるセットアップ",
        urls: {
          "通年": [
            {
              name: "Jersey",
              url: "https://fabric-tokyo.com/products/list/light-suit-lp-jersey"
            }
          ]
        }
      },
      "ジャケはじさん": {
        description: "脱スーツの新定番。<br>清潔感と楽さを両立する服。",
        scene: "スーツ不要になった職場での普段着",
        challenge: "ラフすぎると不安、<br>でもスーツっぽさは嫌",
        benefit: "ベーシックで清潔感、<br>でも驚くほどラクな服",
        urls: {
          "通年": [
            {
              name: "Stretch Wool",
              url: "https://fabric-tokyo.com/products/list/light-suit-lp-stretch-wool?co_ord_set=type"
            },
            {
              name: "Jersey",
              url: "https://fabric-tokyo.com/products/list/light-suit-lp-jersey"
            }
          ],
          "シーズン": [
            {
              name: "Cool",
              url: "https://fabric-tokyo.com/products/list/light-suit-lp-cool"
            }
          ]
        }
      },
      "着こなしさん": {
        description: "迷わず着こなせる、<br>日常を整えるジャケパンスタイル。",
        scene: "ジャケパンで過ごす日常",
        challenge: "自分に合う着こなしが分からない",
        benefit: "きちんと見える安心感と、<br>迷わない着回し力",
        urls: {
          "通年": [
            {
              name: "Stretch Wool",
              url: "https://fabric-tokyo.com/products/list/light-suit-lp-stretch-wool?co_ord_set=type"
            },
            {
              name: "Jersey",
              url: "https://fabric-tokyo.com/products/list/light-suit-lp-jersey"
            }
          ],
          "シーズン": [
            {
              name: "Cool",
              url: "https://fabric-tokyo.com/products/list/light-suit-lp-cool"
            }
          ]
        }
      },
      "ゆるカジさん": {
        description: "TシャツもOK、<br>でもラフすぎない。<br>絶妙なカジュアルライン。",
        scene: "Tシャツやデニムが許される職場",
        challenge: "ただのラフになりすぎるのは避けたい",
        benefit: "カジュアルになじみつつ、<br>さりげなく整う服",
        urls: {
          "通年": [
            {
              name: "Jersey",
              url: "https://fabric-tokyo.com/products/list/light-suit-lp-jersey"
            }
          ],
          "シーズン": [
            {
              name: "Cool",
              url: "https://fabric-tokyo.com/products/list/light-suit-lp-cool"
            }
          ]
        }
      }
    };

    let current = 0;
    let scores = {};

    const app = document.getElementById("app");

    function renderTitleScreen() {
      app.innerHTML = `
        <div class="max-w-xl text-center">
          <div class="fabric-card rounded-2xl p-8 fabric-shadow">
            <h1 class="text-4xl font-bold mb-4 text-black tracking-tight japanese-text">10matrix<br><span class="text-2xl font-light">スタイルブック診断</span></h1>
            <p class="text-lg mb-8 text-gray-700 font-light japanese-text break-words">あなたのライフスタイルに<br>フィットするスタイルを見つけよう</p>
            <div class="space-y-4">
              <button onclick="renderQuestion()" class="w-full px-8 py-4 fabric-button text-white text-xl rounded-xl font-medium"><i class="fas fa-play mr-2"></i>診断を開始する</button>
              <button onclick="showHistory()" class="w-full px-8 py-4 bg-gray-100 text-black text-lg rounded-xl hover:bg-gray-200 transition-all duration-300 font-medium"><i class="fas fa-history mr-2"></i>診断履歴を見る</button>
            </div>
            <div class="mt-12 text-xs text-gray-400 space-y-1 font-light">
              <p>Developer: FUJIMO GAMES</p>
              <p>Planning: SESUKE NAKAGAWA, HISASH-C</p>
            </div>
          </div>
        </div>
      `;
    }

    function renderQuestion() {
      const q = questions[current];
      app.innerHTML = `
        <div class="max-w-xl w-full">
          <div class="fabric-card rounded-2xl p-8 fabric-shadow">
            <div class="text-center mb-8">
              <div class="text-sm text-gray-500 font-medium mb-2">QUESTION ${current + 1} / ${questions.length}</div>
              <div class="w-full bg-gray-200 rounded-full h-2 mb-4">
                <div class="bg-black h-2 rounded-full transition-all duration-500" style="width: ${((current + 1) / questions.length) * 100}%"></div>
              </div>
              <h1 class="text-2xl font-semibold mb-6 text-black tracking-tight japanese-text break-words">${q.q}</h1>
            </div>
            <div class="space-y-3">
              ${q.options.map((opt) => `
                <button onclick="selectAnswer('${opt.score}', '${opt.text}')" class="block w-full text-left border border-gray-200 rounded-xl px-6 py-4 hover:border-black hover:bg-gray-50 transition-all duration-300 text-black font-medium japanese-text break-words">${opt.text}</button>
              `).join('')}
            </div>
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
      
      // ボタンの生成
      let buttonsHtml = '';
      const result = results[resultType];
      
      if (result.urls) {
        // 複数URLの場合は通年・シーズンボタンを表示
        buttonsHtml += `<p class="text-lg font-semibold mb-6 text-black">あなたはどちらをお探しですか？</p>`;
        Object.keys(result.urls).forEach(category => {
          const icon = category === '通年' ? 'fas fa-star' : 'fas fa-leaf';
          buttonsHtml += `<button onclick="showCategoryLinks('${resultType}', '${category}')" class="w-full px-6 py-4 fabric-button text-white rounded-xl font-medium mb-3"><i class="${icon} mr-2"></i>${category}</button>`;
        });
      } else if (result.url) {
        // 単一URLの場合
        buttonsHtml = `<button onclick="window.open('${result.url}', '_blank')" class="w-full px-6 py-3 bg-purple-600 text-white rounded-xl hover:bg-purple-700 mb-3"><i class="fas fa-shopping-bag mr-2"></i>詳細情報を見る</button>`;
      } else {
        // URLがない場合
        buttonsHtml = `<button onclick="alert('このタイプの詳細情報はまだ準備中です。')" class="w-full px-6 py-3 bg-gray-400 text-white rounded-xl cursor-not-allowed mb-3"><i class="fas fa-clock mr-2"></i>詳細情報（準備中）</button>`;
      }
      
      app.innerHTML = `
        <div class="max-w-xl text-center">
          <div class="fabric-card rounded-2xl p-8 fabric-shadow">
            <h1 class="text-3xl font-bold mb-4 text-black tracking-tight japanese-text break-words">あなたは<br>「${resultType}」タイプ！</h1>
            <img src="${imageUrl}" alt="${resultType}" class="mx-auto mb-6 rounded-xl shadow-lg max-w-full h-auto" />
            <p class="text-lg mb-6 text-gray-700 font-light leading-relaxed japanese-text break-words">${description}</p>
            ${scene ? `<div class="text-left p-5 bg-gray-50 rounded-xl mb-4 border-l-4 border-black"><h2 class="font-semibold text-lg mb-2 text-black japanese-text">着用シーン</h2><p class="text-gray-600 japanese-text break-words">${scene}</p></div>` : ''}
            ${challenge ? `<div class="text-left p-5 bg-gray-50 rounded-xl mb-4 border-l-4 border-gray-400"><h2 class="font-semibold text-lg mb-2 text-black japanese-text">課題</h2><p class="text-gray-600 japanese-text break-words">${challenge}</p></div>` : ''}
            ${benefit ? `<div class="text-left p-5 bg-gray-50 rounded-xl mb-4 border-l-4 border-green-500"><h2 class="font-semibold text-lg mb-2 text-black japanese-text">便益</h2><p class="text-gray-600 japanese-text break-words">${benefit}</p></div>` : ''}
            <div class="mt-8 space-y-3">
              ${buttonsHtml}
              <button onclick="location.reload()" class="px-6 py-3 bg-gray-100 text-black text-sm rounded-xl hover:bg-gray-200 transition-all duration-300 font-medium"><i class="fas fa-redo mr-2"></i>もう一度診断する</button>
            </div>
          </div>
        </div>
      `;
    }

    // シェア機能
    function shareResult(resultType) {
      const description = results[resultType].description;
      const shareText = `10matrixスタイルブック診断の結果: 私は「${resultType}」タイプでした！\n${description}`;
      
      if (navigator.share) {
        navigator.share({
          title: '10matrixスタイルブック診断結果',
          text: shareText,
          url: window.location.href
        }).catch(console.error);
      } else {
        // フォールバック: クリップボードにコピー
        navigator.clipboard.writeText(shareText).then(() => {
          alert('結果をクリップボードにコピーしました！');
        }).catch(() => {
          // さらなるフォールバック: テキストエリアを使用
          const textArea = document.createElement('textarea');
          textArea.value = shareText;
          document.body.appendChild(textArea);
          textArea.select();
          document.execCommand('copy');
          document.body.removeChild(textArea);
          alert('結果をクリップボードにコピーしました！');
        });
      }
    }

    // 保存機能
    function saveResult(resultType) {
      const timestamp = new Date().toLocaleString('ja-JP');
      const savedResults = JSON.parse(localStorage.getItem('diagnosisHistory') || '[]');
      
      const newResult = {
        type: resultType,
        description: results[resultType].description,
        timestamp: timestamp,
        scores: {...scores}
      };
      
      savedResults.push(newResult);
      localStorage.setItem('diagnosisHistory', JSON.stringify(savedResults));
      
      alert('診断結果を保存しました！');
    }

    // 履歴表示機能
    function showHistory() {
      const savedResults = JSON.parse(localStorage.getItem('diagnosisHistory') || '[]');
      
      if (savedResults.length === 0) {
        alert('保存された診断結果がありません。');
        return;
      }
      
      const historyHtml = savedResults.map((result, index) => `
        <div class="fabric-card border border-gray-300 rounded-lg p-4 mb-4">
          <h3 class="font-bold text-lg text-black japanese-text">${result.type}</h3>
          <p class="text-sm text-gray-600">${result.timestamp}</p>
          <p class="mt-2 text-gray-700 japanese-text break-words">${result.description}</p>
        </div>
      `).join('');
      
      app.innerHTML = `
        <div class="max-w-xl w-full">
          <div class="fabric-card rounded-2xl p-8 fabric-shadow">
            <h1 class="text-3xl font-bold mb-6 text-center text-black japanese-text">診断履歴</h1>
            <div class="max-h-96 overflow-y-auto">
              ${historyHtml}
            </div>
            <div class="mt-6 space-y-3">
              <button onclick="clearHistory()" class="w-full px-6 py-3 bg-red-600 text-white rounded-xl hover:bg-red-700 font-medium"><i class="fas fa-trash mr-2"></i>履歴をクリア</button>
              <button onclick="renderTitleScreen()" class="w-full px-6 py-3 fabric-button text-white rounded-xl font-medium"><i class="fas fa-home mr-2"></i>トップに戻る</button>
            </div>
          </div>
        </div>
      `;
    }

    // 履歴クリア機能
     function clearHistory() {
       if (confirm('診断履歴をすべて削除しますか？')) {
         localStorage.removeItem('diagnosisHistory');
         alert('履歴を削除しました。');
         renderTitleScreen();
       }
     }

     // 外部リンク機能
     function openExternalLink(resultType) {
       const result = results[resultType];
       
       // 単一URLの場合
       if (result.url) {
         window.open(result.url, '_blank');
         return;
       }
       
       // 複数URLの場合
       if (result.urls) {
         showLinkSelection(resultType);
         return;
       }
       
       alert('このタイプの詳細情報はまだ準備中です。');
     }

     // リンク選択画面
     function showLinkSelection(resultType) {
       const result = results[resultType];
       const urls = result.urls;
       
       let linksHtml = '';
       
       Object.keys(urls).forEach(category => {
         linksHtml += `<h3 class="font-bold text-lg mb-3 mt-6 first:mt-0">${category}</h3>`;
         urls[category].forEach(link => {
           linksHtml += `
             <button onclick="window.open('${link.url}', '_blank')" class="product-link-button block w-full text-left rounded-lg px-4 py-3 mb-2">
               <i class="fas fa-shopping-bag mr-2"></i>${link.name}
             </button>
           `;
         });
       });
       
       app.innerHTML = `
         <div class="max-w-xl w-full">
           <div class="fabric-card rounded-2xl p-8 fabric-shadow">
             <h1 class="text-3xl font-bold mb-6 text-center text-black japanese-text break-words">「${resultType}」の詳細情報</h1>
             <div class="mb-6">
               ${linksHtml}
             </div>
             <div class="mt-6 space-y-3">
               <button onclick="showResultFromHistory('${resultType}')" class="w-full px-6 py-3 fabric-button text-white rounded-xl font-medium"><i class="fas fa-arrow-left mr-2"></i>診断結果に戻る</button>
             </div>
           </div>
         </div>
       `;
     }

     // 診断結果を再表示する関数
     function showResultFromHistory(resultType) {
       const description = results[resultType].description;
       const scene = results[resultType].scene;
       const challenge = results[resultType].challenge;
       const benefit = results[resultType].benefit;
       const imageUrl = `images/${resultType}.png`;
       
       // ボタンの生成
       let buttonsHtml = '';
       const result = results[resultType];
       
       if (result.urls) {
          // 複数URLの場合は通年・シーズンボタンを表示
          buttonsHtml += `<p class="text-lg font-semibold mb-6 text-black">あなたはどちらをお探しですか？</p>`;
           Object.keys(result.urls).forEach(category => {
             const icon = category === '通年' ? 'fas fa-star' : 'fas fa-leaf';
             buttonsHtml += `<button onclick="showCategoryLinks('${resultType}', '${category}')" class="w-full px-6 py-4 fabric-button text-white rounded-xl font-medium mb-3"><i class="${icon} mr-2"></i>${category}</button>`;
          });
        } else if (result.url) {
         // 単一URLの場合
         buttonsHtml = `<button onclick="window.open('${result.url}', '_blank')" class="w-full px-6 py-3 bg-purple-600 text-white rounded-xl hover:bg-purple-700 mb-3"><i class="fas fa-shopping-bag mr-2"></i>詳細情報を見る</button>`;
       } else {
         // URLがない場合
         buttonsHtml = `<button onclick="alert('このタイプの詳細情報はまだ準備中です。')" class="w-full px-6 py-3 bg-gray-400 text-white rounded-xl cursor-not-allowed mb-3"><i class="fas fa-clock mr-2"></i>詳細情報（準備中）</button>`;
       }
       
       app.innerHTML = `
         <div class="max-w-xl text-center">
           <div class="fabric-card rounded-2xl p-8 fabric-shadow">
             <h1 class="text-3xl font-bold mb-4 text-black tracking-tight japanese-text break-words">あなたは<br>「${resultType}」タイプ！</h1>
             <img src="${imageUrl}" alt="${resultType}" class="mx-auto mb-6 rounded-xl shadow-lg max-w-full h-auto" />
             <p class="text-lg mb-6 text-gray-700 font-light leading-relaxed japanese-text break-words">${description}</p>
             ${scene ? `<div class="text-left p-5 bg-gray-50 rounded-xl mb-4 border-l-4 border-black"><h2 class="font-semibold text-lg mb-2 text-black japanese-text">着用シーン</h2><p class="text-gray-600 japanese-text break-words">${scene}</p></div>` : ''}
             ${challenge ? `<div class="text-left p-5 bg-gray-50 rounded-xl mb-4 border-l-4 border-gray-400"><h2 class="font-semibold text-lg mb-2 text-black japanese-text">課題</h2><p class="text-gray-600 japanese-text break-words">${challenge}</p></div>` : ''}
             ${benefit ? `<div class="text-left p-5 bg-gray-50 rounded-xl mb-4 border-l-4 border-green-500"><h2 class="font-semibold text-lg mb-2 text-black japanese-text">便益</h2><p class="text-gray-600 japanese-text break-words">${benefit}</p></div>` : ''}
             <div class="mt-8 space-y-3">
               ${buttonsHtml}
               <button onclick="location.reload()" class="px-6 py-3 bg-gray-100 text-black text-sm rounded-xl hover:bg-gray-200 transition-all duration-300 font-medium"><i class="fas fa-redo mr-2"></i>もう一度診断する</button>
             </div>
           </div>
         </div>
       `;
     }

     // カテゴリ別リンク表示機能
     function showCategoryLinks(resultType, category) {
       const result = results[resultType];
       const links = result.urls[category];
       
       let linksHtml = '';
       links.forEach(link => {
         linksHtml += `
           <button onclick="window.open('${link.url}', '_blank')" class="product-link-button block w-full text-left rounded-lg px-4 py-3 mb-2">
             <i class="fas fa-shopping-bag mr-2"></i>${link.name}
           </button>
         `;
       });
       
       app.innerHTML = `
         <div class="max-w-xl w-full">
           <div class="fabric-card rounded-2xl p-8 fabric-shadow">
             <h1 class="text-3xl font-bold mb-6 text-center text-black japanese-text break-words">「${resultType}」<br>${category}アイテム</h1>
             <div class="mb-6">
               ${linksHtml}
             </div>
             <div class="mt-6 space-y-3">
               <button onclick="showResultFromHistory('${resultType}')" class="w-full px-6 py-3 fabric-button text-white rounded-xl font-medium"><i class="fas fa-arrow-left mr-2"></i>診断結果に戻る</button>
             </div>
           </div>
         </div>
       `;
     }

    // 初期表示
    renderTitleScreen();