const styleOptions = [
      { id: 1, name: "晴れの日スーツ", image: "style01.png" },
      { id: 2, name: "3ピーススーツ", image: "style02.png" },
      { id: 3, name: "2ピーススーツ（パッドあり）", image: "style03.png" },
      { id: 4, name: "セットアップ（パッド無し）", image: "style04.png" },
      { id: 5, name: "セットアップ（ジャージー生地）", image: "style05.png" },
      { id: 6, name: "ジャケパン（初級）", image: "style06.png" },
      { id: 7, name: "ジャケパン（上級）", image: "style07.png" },
      { id: 8, name: "セットアップ（インナー自由）", image: "style08.png" },
      { id: 9, name: "シャツパンツ（着イン）", image: "style09.png" },
      { id: 10, name: "シャツパンツ（着アウト）", image: "style10.png" }
    ];

    const questions = [
      {
        id: 1,
        type: "image_select",
        q: "あなたの普段の服装に最も近いものは？",
        options: styleOptions
      },
      {
        id: 2,
        type: "image_select",
        q: "あなたの周囲（職場・環境）で多い服装は？",
        options: styleOptions
      },
      {
        id: 3,
        type: "text_select",
        q: "今回探している目的アイテムは？",
        options: [
          { text: "スーツ", value: "suit" },
          { text: "ジャケット", value: "jacket" },
          { text: "セットアップ", value: "setup" },
          { text: "シャツ", value: "shirt" },
          { text: "パンツ", value: "pants" }
        ],
        conditionalOptions: {
          "晴れの日スーツ": [
            { text: "3ピーススーツ", value: "three_piece", image: "3piece.svg", url: "https://fabric-tokyo.com/products/list/three_piece_suit?scene=10&sortType=recommend" },
            { text: "セットアップ", value: "setup", image: "co-ord-set.svg", url: "https://fabric-tokyo.com/products/list/co_ord_set?scene=10&sortType=recommend" },
            { text: "2ピーススーツ", value: "two_piece", image: "2piece_suit.svg", url: "https://fabric-tokyo.com/products/list/two_piece_suit?scene=10&sortType=recommend" },
            { text: "フォーマルシャツ", value: "formal_shirt", image: "formal_shirts.svg", url: "https://fabric-tokyo.com/products/list/formal_shirts?scene=10&scene=11&sortType=recommend" }
          ]
        }
      },
      {
        id: 4,
        type: "image_select",
        q: "そのアイテムの主な用途は？",
        options: [
          { id: 1, name: "結婚式・パーティー専用", image: "結婚式・パーティー専用.webp" },
          { id: 2, name: "ビジネス兼用", image: "ビジネス兼用.webp" },
          { id: 3, name: "カジュアル・プライベート兼用", image: "カジュアル・プライベート兼用.webp" }
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

    let currentQuestion = 0;
    let userAnswers = [];

    const app = document.getElementById("app");

    function renderTitleScreen() {
      app.innerHTML = `
        <div class="particles">
            <div class="particle"></div>
            <div class="particle"></div>
            <div class="particle"></div>
            <div class="particle"></div>
            <div class="particle"></div>
            <div class="particle"></div>
            <div class="particle"></div>
            <div class="particle"></div>
            <div class="particle"></div>
            <div class="particle"></div>
        </div>
        <div class="max-w-xl text-center title-content">
          <div class="fabric-card rounded-2xl p-8 fabric-shadow">
            <h1 class="text-4xl font-bold mb-4 text-black tracking-tight japanese-text title-fade-in">10matrix<br><span class="text-2xl font-light">スタイルブック診断</span></h1>
            <p class="text-lg mb-8 text-gray-700 font-light japanese-text break-words subtitle-fade-in">あなたのライフスタイルに<br>フィットするスタイルを見つけよう</p>
            <div class="space-y-4">
              <button onclick="renderQuestion()" class="w-full px-8 py-4 fabric-button text-white text-xl rounded-xl font-medium button-fade-in"><i class="fas fa-play mr-2"></i>診断を開始する</button>
              <button onclick="showHistory()" class="w-full px-8 py-4 bg-gray-100 text-black text-lg rounded-xl hover:bg-gray-200 transition-all duration-300 font-medium button-fade-in"><i class="fas fa-history mr-2"></i>診断履歴を見る</button>
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
      if (currentQuestion >= questions.length) {
        showResult();
        return;
      }

      const q = questions[currentQuestion];
      
      let optionsHtml = '';
      if (q.type === 'image_select') {
         // 質問4（用途選択）の場合は3列グリッドを使用
         const gridClass = q.id === 4 ? 'grid grid-cols-3 gap-4' : 'image-grid';
         optionsHtml = `
           <div class="touch-instruction mb-4 text-center">
             <p class="text-sm text-gray-600">👆 画像をタッチして選択してください</p>
           </div>
           <div class="${gridClass} mb-6">
             ${q.options.map((option, index) => `
               <button onclick="selectAnswer(${option.id}, '${option.name}')" class="card-style-btn">
                 <img src="images/${option.image}" alt="${option.name}">
                 ${q.id === 4 ? `<div class="mt-2 text-sm font-medium text-center text-gray-800">${option.name}</div>` : ''}
               </button>
             `).join('')}
           </div>
         `;
      } else {
        // 質問3で「晴れの日スーツ」が選択されている場合の条件分岐
        if (q.id === 3 && q.conditionalOptions && userAnswers[0] && userAnswers[0].text === "晴れの日スーツ") {
          const conditionalOpts = q.conditionalOptions["晴れの日スーツ"];
          optionsHtml = `
            <div class="touch-instruction mb-4 text-center">
              <p class="text-sm text-gray-600">👆 画像をタッチして選択してください</p>
            </div>
            <div class="grid grid-cols-2 gap-4 mb-6">
              ${conditionalOpts.map((option, index) => `
                <button onclick="selectAnswerWithUrl('${option.value}', '${option.text}', '${option.url}')" class="card-style-btn">
                  <img src="images/${option.image}" alt="${option.text}">
                  <div class="mt-2 text-sm font-medium text-center">${option.text}</div>
                </button>
              `).join('')}
            </div>
          `;
        } else {
          optionsHtml = `
            <div class="space-y-3">
              ${q.options.map((option, index) => `
                <button onclick="selectAnswer('${option.value}', '${option.text}')" class="w-full p-4 text-left border-2 border-gray-200 rounded-xl hover:border-black hover:bg-gray-50 transition-all duration-200 japanese-text break-words">
                  ${option.text}
                </button>
              `).join('')}
            </div>
          `;
        }
      }

      app.innerHTML = `
        <div class="max-w-4xl w-full question-slide-in">
          <div class="fabric-card rounded-2xl p-8 fabric-shadow">
            <div class="text-center mb-8">
              <div class="text-sm text-gray-500 mb-2">質問 ${currentQuestion + 1} / ${questions.length}</div>
              <div class="w-full bg-gray-200 rounded-full h-2 mb-6">
                <div class="bg-black h-2 rounded-full transition-all duration-300" style="width: ${((currentQuestion + 1) / questions.length) * 100}%"></div>
              </div>
              <h2 class="text-2xl font-bold ${currentQuestion === 2 ? 'text-gray-700' : 'text-black'} japanese-text">${q.q}</h2>
            </div>
            ${optionsHtml}
            <div class="mt-6 text-center">
              <button onclick="restart()" class="text-sm text-gray-500 hover:text-gray-700 transition-colors">最初に戻る</button>
            </div>
          </div>
        </div>
      `;
    }

    function selectAnswer(value, text) {
      userAnswers[currentQuestion] = { value, text };
      currentQuestion++;
      renderQuestion();
    }

    function selectAnswerWithUrl(value, text, url) {
      userAnswers[currentQuestion] = { value, text, url };
      currentQuestion++;
      if (currentQuestion < questions.length) {
        renderQuestion();
      } else {
        showResult();
      }
    }

    function showSpecialResult() {
      const selectedItem = userAnswers[2]; // 質問3の回答
      const selectedPurpose = userAnswers[3]; // 質問4の回答（用途）
      
      // アイテムと用途に基づく詳細情報
      const itemDetails = {
        'three_piece': {
          title: '3ピーススーツ',
          description: '格式高い場面に最適な、伝統的なフォーマルスタイル。ベストが加わることで、より洗練された印象を演出します。',
          features: ['最高級のフォーマル感', 'ベスト付きで体型カバー', '重要な場面での信頼感'],
          links: {
            '結婚式・パーティー専用': [
              { name: '3ピーススーツを見る', url: 'https://fabric-tokyo.com/products/list/three_piece_suit?scene=10&scene=11&sortType=recommend' }
            ],
            'default': [
              { name: '3ピーススーツを見る', url: 'https://fabric-tokyo.com/products/list/three_piece_suit?scene=10&sortType=recommend' }
            ]
          }
        },
        'two_piece': {
          title: '2ピーススーツ',
          description: 'ビジネスからフォーマルまで幅広く活用できる、最もスタンダードなスーツスタイル。',
          features: ['汎用性の高さ', 'スタイリッシュなシルエット', 'ビジネスシーンでの定番'],
          links: {
            '結婚式・パーティー専用': [
              { name: '2ピーススーツを見る', url: 'https://fabric-tokyo.com/products/list/two_piece_suit?scene=10&scene=11&sortType=recommend' }
            ],
            'default': [
              { name: '2ピーススーツを見る', url: 'https://fabric-tokyo.com/products/list/two_piece_suit?scene=10&sortType=recommend' }
            ]
          }
        },
        'setup': {
          title: 'セットアップ',
          description: 'モダンで洗練されたコーディネート。上下セットでありながら、カジュアルダウンも可能な万能アイテム。',
          features: ['モダンなスタイル', '着回しの自由度', 'トレンド感のあるデザイン'],
          links: {
            '結婚式・パーティー専用': [
              { name: 'セットアップを見る', url: 'https://fabric-tokyo.com/products/list/co-ord-set?price=59800&price=69000&price=79000&price=89000&price=110000&price=132000&price=57000&scene=9&sortType=recommend' }
            ],
            'default': [
              { name: 'セットアップを見る', url: 'https://fabric-tokyo.com/products/list/co-ord-set?price[]=57000&price[]=59800&price[]=69000&price[]=79000&price[]=89000&price[]=110000&price[]=132000&scene=9&sortType=recommend' }
            ]
          }
        },
        'formal_shirt': {
          title: 'フォーマルシャツ',
          description: 'フォーマルな場面に欠かせない、上質なドレスシャツ。細部にこだわった仕立てで品格を演出。',
          features: ['上質な素材感', '細部へのこだわり', 'フォーマルシーンでの必需品'],
          links: [
            { name: 'フォーマルシャツを見る', url: 'https://fabric-tokyo.com/products/list/formal_shirts?scene=10&scene=11&sortType=recommend' }
          ]
        }
      };
      
      const purposeDetails = {
        '結婚式・パーティー専用': {
          scene: '結婚式・パーティー',
          recommendation: '特別な日にふさわしい、格式高いスタイルをお選びいただきました。',
          additionalLinks: [
            { name: 'アクセサリー・小物', url: 'https://fabric-tokyo.com/products/list/accessories?scene=formal' },
            { name: 'フォーマルシューズ', url: 'https://fabric-tokyo.com/products/list/shoes?scene=formal' }
          ]
        },
        'ビジネス兼用': {
          scene: 'ビジネス・フォーマル',
          recommendation: 'ビジネスシーンでも活用できる、実用性の高いスタイルです。',
          additionalLinks: [
            { name: 'ビジネスシャツ', url: 'https://fabric-tokyo.com/products/list/business_shirts' },
            { name: 'ネクタイ・小物', url: 'https://fabric-tokyo.com/products/list/accessories?scene=business' }
          ]
        },
        'カジュアル・プライベート兼用': {
          scene: 'カジュアル・プライベート',
          recommendation: 'プライベートでも楽しめる、着回しの利くスタイルです。',
          additionalLinks: [
            { name: 'カジュアルシャツ', url: 'https://fabric-tokyo.com/products/list/casual_shirts' },
            { name: 'カジュアル小物', url: 'https://fabric-tokyo.com/products/list/accessories?scene=casual' }
          ]
        }
      };
      
      const currentItem = itemDetails[selectedItem.value] || itemDetails['two_piece'];
      const currentPurpose = purposeDetails[selectedPurpose.text] || purposeDetails['ビジネス兼用'];
      
      // 用途に応じたリンクを選択
      const selectedLinks = currentItem.links[selectedPurpose.text] || currentItem.links['default'] || [];
      
      app.innerHTML = `
        <div class="max-w-4xl text-center result-reveal">
          <div class="fabric-card rounded-2xl p-8 fabric-shadow">
            <h1 class="text-3xl font-bold mb-6 text-black tracking-tight japanese-text">あなたの選択結果</h1>
            
            <div class="mb-8">
              <img src="images/${selectedItem.value === 'three_piece' ? '3piece.svg' : selectedItem.value === 'two_piece' ? '2piece_suit.svg' : selectedItem.value === 'formal_shirt' ? 'formal_shirts.svg' : 'co-ord-set.svg'}" alt="${selectedItem.text}" class="mx-auto mb-6 rounded-xl shadow-lg max-w-full h-auto" style="max-height: 250px;" />
              
              <div class="text-left space-y-6">
                <div class="bg-gray-50 rounded-xl p-6">
                  <h2 class="text-xl font-bold mb-3 text-black japanese-text">${currentItem.title}</h2>
                  <p class="text-gray-700 mb-4 leading-relaxed japanese-text">${currentItem.description}</p>
                </div>
                
                <div class="bg-blue-50 rounded-xl p-6 border-l-4 border-blue-500">
                  <h3 class="font-bold text-lg mb-2 text-blue-800 japanese-text">着用シーン</h3>
                  <p class="text-blue-700 mb-2 japanese-text">${currentPurpose.scene}</p>
                  <p class="text-blue-600 text-sm japanese-text">${currentPurpose.recommendation}</p>
                </div>
                
                <div class="bg-green-50 rounded-xl p-6 border-l-4 border-green-500">
                  <h3 class="font-bold text-lg mb-4 text-green-800 japanese-text">おすすめ商品</h3>
                  <button onclick="window.open('${selectedLinks[0].url}', '_blank')" class="w-full px-6 py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all duration-200 text-lg font-medium">
                    <i class="fas fa-external-link-alt mr-2"></i>${selectedLinks[0].name}
                  </button>
                </div>
              </div>
            </div>
            
            <div class="space-y-4">
              <button onclick="restart()" class="w-full px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition-all duration-200 font-medium">
                <i class="fas fa-redo mr-2"></i>もう一度診断する
              </button>
              
              <button onclick="restart()" class="w-full px-6 py-3 bg-gray-100 text-black rounded-xl hover:bg-gray-200 transition-all duration-200 font-medium">
                <i class="fas fa-home mr-2"></i>最初に戻る
              </button>
            </div>
          </div>
        </div>
      `;
    }

    function showResult() {
      // 「晴れの日スーツ」選択時は専用の結果画面を表示
      if (userAnswers[0] && userAnswers[0].text === "晴れの日スーツ") {
        showSpecialResult();
        return;
      }
      
      // 回答に基づいて結果を生成
      const ownStyle = userAnswers[0]?.text || '不明';
      const surroundingStyle = userAnswers[1]?.text || '不明';
      const targetItem = userAnswers[2]?.text || '不明';
      const itemPurpose = userAnswers[3]?.text || '不明';

      app.innerHTML = `
        <div class="max-w-2xl w-full result-reveal">
          <div class="fabric-card rounded-2xl p-8 fabric-shadow">
            <div class="text-center mb-8">
              <div class="text-sm text-gray-500 mb-4">診断結果</div>
              <h2 class="text-3xl font-bold text-black mb-6 japanese-text">あなたの診断結果</h2>
            </div>
            
            <div class="space-y-6 mb-8">
              <div class="bg-gray-50 rounded-xl p-4">
                <h3 class="font-bold text-lg mb-2 japanese-text">自身の服装</h3>
                <p class="text-gray-700 japanese-text">${ownStyle}</p>
              </div>
              <div class="bg-gray-50 rounded-xl p-4">
                <h3 class="font-bold text-lg mb-2 japanese-text">周囲の服装</h3>
                <p class="text-gray-700 japanese-text">${surroundingStyle}</p>
              </div>
              <div class="bg-gray-50 rounded-xl p-4">
                <h3 class="font-bold text-lg mb-2 japanese-text">目的アイテム</h3>
                <p class="text-gray-700 japanese-text">${targetItem}</p>
              </div>
              <div class="bg-gray-50 rounded-xl p-4">
                <h3 class="font-bold text-lg mb-2 japanese-text">目的アイテムの用途</h3>
                <p class="text-gray-700 japanese-text">${itemPurpose}</p>
              </div>
            </div>
            
            <div class="space-y-4">
              <button onclick="showHistory()" class="w-full bg-black text-white py-3 px-6 rounded-xl hover:bg-gray-800 transition-all duration-200 font-medium">
                回答履歴を見る
              </button>
              <button onclick="showLinkSelection()" class="w-full border-2 border-black text-black py-3 px-6 rounded-xl hover:bg-black hover:text-white transition-all duration-200 font-medium">
                商品を見る
              </button>
              <button onclick="restart()" class="w-full text-gray-600 py-3 px-6 rounded-xl hover:bg-gray-100 transition-all duration-200">
                もう一度診断する
              </button>
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
      let historyHtml = '';
      questions.forEach((question, index) => {
        const answer = userAnswers[index];
        if (answer) {
          historyHtml += `
            <div class="bg-gray-50 rounded-xl p-4 mb-3">
              <h3 class="font-bold text-lg mb-2 japanese-text">${question.q}</h3>
              <p class="text-gray-700 japanese-text">${answer.text}</p>
            </div>
          `;
        }
      });

      app.innerHTML = `
        <div class="max-w-2xl w-full page-fade-in">
          <div class="fabric-card rounded-2xl p-8 fabric-shadow">
            <div class="text-center mb-8">
              <h2 class="text-2xl font-bold text-black japanese-text">回答履歴</h2>
            </div>
            ${historyHtml}
            <div class="space-y-4 mt-8">
              <button onclick="showResult()" class="w-full bg-black text-white py-3 px-6 rounded-xl hover:bg-gray-800 transition-all duration-200 font-medium">
                結果に戻る
              </button>
              <button onclick="restart()" class="w-full text-gray-600 py-3 px-6 rounded-xl hover:bg-gray-100 transition-all duration-200">
                もう一度診断する
              </button>
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
         <div class="max-w-xl w-full page-fade-in page-transition">
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
         <div class="max-w-xl w-full page-fade-in">
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

    function restart() {
      currentQuestion = 0;
      userAnswers = [];
      renderTitleScreen();
    }

     // 初期表示
    renderTitleScreen();