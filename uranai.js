/* サチ子先生の占い部屋
 *-----------------------------------
 * 1.占い結果の候補を用意
 * 2.占うボタンをクリックしたら候補の中から１つランダムで取得し、占い結果を表示し、占うボタンを「もう一度占う」に変更
 * 3.リセットリンクを設置する
 */

const countMax = 3;		// 最大3回まで占える
let counter = countMax; // 1回占うごとにカウンタを減らしていく

let submit = document.getElementById('submit');

// 「占う」ボタンをクリックしたらuranaiSachiko関数を実行
submit.addEventListener('click', function(){
	this.textContent = "もう一度占う";
	uranaiSachiko();
	counter--;

	// 上限回数に達したらボタンを押せないようにする
	if (counter == 0) {
		this.disabled = true;
		// リセットボタン
		const reset = document.createElement("p");
		reset.setAttribute('id', 'reset');
		reset.textContent = ">リセットする";
		// reset.style.cssText = "";  style.cssにてスタイル設定
		this.after(reset);
		// カウンタをリセット
		reset.addEventListener('click', function(){
			counter = countMax;       // カウンタを戻す
			submit.disabled = false;  // 再びボタンを押せるようにする
			this.remove();
		});
	}
});

// サチ子先生の占い実行関数
function uranaiSachiko() {
	// 占い結果の候補
	const results = [
		"朝起きて自炊するでしょう",
		"仕事帰りに家系ラーメンが食べたくなるけど我慢するでしょう",
		"腹筋を120回するでしょう",
		"お酒を我慢するでしょう",
		];
	// 占い結果表示要素を取得
	let result = document.getElementById('result');
	// 候補の中から１つランダムで取得し、占い結果を表示
	let rt = results[Math.floor(Math.random() * results.length)];
	result.textContent = rt + " !";
}