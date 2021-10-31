export interface Character {
    id: number,
    hiragana_char: string;
    katakana_char: string;
    romaji: string;
}

export enum QuizCharacterState {
    Matched = 'MATCHED',
    Invalid = 'INVALID',
    NotMatched = 'NOT_MATCHED'
}

export interface QuizCharacter extends Character {
    state: QuizCharacterState;
}

export interface MatchingCharacter extends Character {
    matched?: boolean;
}

const CHARACTERS: Character[] = [
    {
        id: 1,
        hiragana_char: "あ",
        katakana_char: "ア",
        romaji: "a"
    },
    {
        id: 2,
        hiragana_char: "い",
        katakana_char: "イ",
        romaji: "i"
    },
    {
        id: 3,
        hiragana_char: "う",
        katakana_char: "ウ",
        romaji: "u"
    },
    {
        id: 4,
        hiragana_char: "え",
        katakana_char: "エ",
        romaji: "e"
    },
    {
        id: 5,
        hiragana_char: "お",
        katakana_char: "オ",
        romaji: "o"
    },
    {
        id: 6,
        hiragana_char: "か",
        katakana_char: "カ",
        romaji: "ka"
    },
    {
        id: 7,
        hiragana_char: "き",
        katakana_char: "キ",
        romaji: "ki"
    },
    {
        id: 8,
        hiragana_char: "く",
        katakana_char: "ク",
        romaji: "ku"
    },
    {
        id: 9,
        hiragana_char: "け",
        katakana_char: "ケ",
        romaji: "ke"
    },
    {
        id: 10,
        hiragana_char: "こ",
        katakana_char: "コ",
        romaji: "ko"
    },
    {
        id: 11,
        hiragana_char: "さ",
        katakana_char: "サ",
        romaji: "sa"
    },
    {
        id: 12,
        hiragana_char: "し",
        katakana_char: "シ",
        romaji: "shi"
    },
    {
        id: 13,
        hiragana_char: "す",
        katakana_char: "ス",
        romaji: "su"
    },
    {
        id: 14,
        hiragana_char: "せ",
        katakana_char: "セ",
        romaji: "se"
    },
    {
        id: 15,
        hiragana_char: "そ",
        katakana_char: "ソ",
        romaji: "so"
    },
    {
        id: 16,
        hiragana_char: "た",
        katakana_char: "タ",
        romaji: "ta"
    },
    {
        id: 17,
        hiragana_char: "ち",
        katakana_char: "チ",
        romaji: "chi"
    },
    {
        id: 18,
        hiragana_char: "つ",
        katakana_char: "ツ",
        romaji: "tsu"
    },
    {
        id: 19,
        hiragana_char: "て",
        katakana_char: "テ",
        romaji: "te"
    },
    {
        id: 20,
        hiragana_char: "と",
        katakana_char: "ト",
        romaji: "to"
    },
    {
        id: 21,
        hiragana_char: "な",
        katakana_char: "ナ",
        romaji: "na"
    },
    {
        id: 22,
        hiragana_char: "に",
        katakana_char: "ニ",
        romaji: "ni"
    },
    {
        id: 23,
        hiragana_char: "ぬ",
        katakana_char: "ヌ",
        romaji: "nu"
    },
    {
        id: 24,
        hiragana_char: "ね",
        katakana_char: "ネ",
        romaji: "ne"
    },
    {
        id: 25,
        hiragana_char: "の",
        katakana_char: "ノ",
        romaji: "no"
    },
    {
        id: 26,
        hiragana_char: "は",
        katakana_char: "ハ",
        romaji: "ha"
    },
    {
        id: 27,
        hiragana_char: "ひ",
        katakana_char: "ヒ",
        romaji: "hi"
    },
    {
        id: 28,
        hiragana_char: "ふ",
        katakana_char: "フ",
        romaji: "fu"
    },
    {
        id: 29,
        hiragana_char: "へ",
        katakana_char: "ヘ",
        romaji: "he"
    },
    {
        id: 30,
        hiragana_char: "ほ",
        katakana_char: "ホ",
        romaji: "ho"
    },
    {
        id: 31,
        hiragana_char: "ま",
        katakana_char: "マ",
        romaji: "ma"
    },
    {
        id: 32,
        hiragana_char: "み",
        katakana_char: "ミ",
        romaji: "mi"
    },
    {
        id: 33,
        hiragana_char: "む",
        katakana_char: "ム",
        romaji: "mu"
    },
    {
        id: 34,
        hiragana_char: "め",
        katakana_char: "メ",
        romaji: "me"
    },
    {
        id: 35,
        hiragana_char: "も",
        katakana_char: "モ",
        romaji: "mo"
    },
    {
        id: 36,
        hiragana_char: "や",
        katakana_char: "ヤ",
        romaji: "ya"
    },
    {
        id: 37,
        hiragana_char: "ゆ",
        katakana_char: "ユ",
        romaji: "yu"
    },
    {
        id: 38,
        hiragana_char: "よ",
        katakana_char: "ヨ",
        romaji: "yo"
    },
    {
        id: 39,
        hiragana_char: "ら",
        katakana_char: "ラ",
        romaji: "ra"
    },
    {
        id: 40,
        hiragana_char: "り",
        katakana_char: "リ",
        romaji: "ri"
    },
    {
        id: 41,
        hiragana_char: "る",
        katakana_char: "ル",
        romaji: "ru"
    },
    {
        id: 42,
        hiragana_char: "れ",
        katakana_char: "レ",
        romaji: "re"
    },
    {
        id: 43,
        hiragana_char: "ろ",
        katakana_char: "ロ",
        romaji: "ro"
    },
    {
        id: 44,
        hiragana_char: "わ",
        katakana_char: "ワ",
        romaji: "wa"
    },
    {
        id: 45,
        hiragana_char: "ゐ",
        katakana_char: "ヰ",
        romaji: "wi"
    },
    {
        id: 46,
        hiragana_char: "ゑ",
        katakana_char: "ヱ",
        romaji: "we"
    },
    {
        id: 47,
        hiragana_char: "を",
        katakana_char: "ヲ",
        romaji: "wo"
    },
    {
        id: 48,
        hiragana_char: "ん",
        katakana_char: "ン",
        romaji: "n"
    },
    {
        id: 49,
        hiragana_char: "が",
        katakana_char: "ガ",
        romaji: "ga"
    },
    {
        id: 50,
        hiragana_char: "ぎ",
        katakana_char: "ギ",
        romaji: "gi"
    },
    {
        id: 51,
        hiragana_char: "ぐ",
        katakana_char: "グ",
        romaji: "gu"
    },
    {
        id: 52,
        hiragana_char: "げ",
        katakana_char: "ゲ",
        romaji: "ge"
    },
    {
        id: 53,
        hiragana_char: "ご",
        katakana_char: "ゴ",
        romaji: "go"
    },
    {
        id: 54,
        hiragana_char: "ざ",
        katakana_char: "ザ",
        romaji: "za"
    },
    {
        id: 55,
        hiragana_char: "じ",
        katakana_char: "ジ",
        romaji: "ji"
    },
    {
        id: 56,
        hiragana_char: "ず",
        katakana_char: "ズ",
        romaji: "zu"
    },
    {
        id: 57,
        hiragana_char: "ぜ",
        katakana_char: "ゼ",
        romaji: "ze"
    },
    {
        id: 58,
        hiragana_char: "ぞ",
        katakana_char: "ゾ",
        romaji: "zo"
    },
    {
        id: 59,
        hiragana_char: "だ",
        katakana_char: "ダ",
        romaji: "da"
    },
    {
        id: 60,
        hiragana_char: "ぢ",
        katakana_char: "ヂ",
        romaji: "ji"
    },
    {
        id: 61,
        hiragana_char: "づ",
        katakana_char: "ヅ",
        romaji: "zu"
    },
    {
        id: 62,
        hiragana_char: "で",
        katakana_char: "デ",
        romaji: "de"
    },
    {
        id: 63,
        hiragana_char: "ど",
        katakana_char: "ド",
        romaji: "do"
    },
    {
        id: 64,
        hiragana_char: "ば",
        katakana_char: "バ",
        romaji: "ba"
    },
    {
        id: 65,
        hiragana_char: "び",
        katakana_char: "ビ",
        romaji: "bi"
    },
    {
        id: 66,
        hiragana_char: "ぶ",
        katakana_char: "ブ",
        romaji: "bu"
    },
    {
        id: 67,
        hiragana_char: "べ",
        katakana_char: "ベ",
        romaji: "be"
    },
    {
        id: 68,
        hiragana_char: "ぼ",
        katakana_char: "ボ",
        romaji: "bo"
    },
    {
        id: 69,
        hiragana_char: "ぱ",
        katakana_char: "パ",
        romaji: "pa"
    },
    {
        id: 70,
        hiragana_char: "ぴ",
        katakana_char: "ピ",
        romaji: "pi"
    },
    {
        id: 71,
        hiragana_char: "ぷ",
        katakana_char: "プ",
        romaji: "pu"
    },
    {
        id: 72,
        hiragana_char: "ぺ",
        katakana_char: "ペ",
        romaji: "pe"
    },
    {
        id: 73,
        hiragana_char: "ぽ",
        katakana_char: "ポ",
        romaji: "po"
    },
    {
        id: 74,
        hiragana_char: "ゔ",
        katakana_char: "ヴ",
        romaji: "vu"
    },
    {
        id: 75,
        hiragana_char: "きゃ",
        katakana_char: "キャ",
        romaji: "kya"
    },
    {
        id: 76,
        hiragana_char: "きゅ",
        katakana_char: "キュ",
        romaji: "kyu"
    },
    {
        id: 77,
        hiragana_char: "きょ",
        katakana_char: "キョ",
        romaji: "kyo"
    },
    {
        id: 78,
        hiragana_char: "しゃ",
        katakana_char: "シャ",
        romaji: "sha"
    },
    {
        id: 79,
        hiragana_char: "しゅ",
        katakana_char: "シュ",
        romaji: "shu"
    },
    {
        id: 80,
        hiragana_char: "しょ",
        katakana_char: "ショ",
        romaji: "sho"
    },
    {
        id: 81,
        hiragana_char: "ちゃ",
        katakana_char: "チャ",
        romaji: "cha"
    },
    {
        id: 82,
        hiragana_char: "ちゅ",
        katakana_char: "チュ",
        romaji: "chu"
    },
    {
        id: 83,
        hiragana_char: "ちょ",
        katakana_char: "チョ",
        romaji: "cho"
    },
    {
        id: 84,
        hiragana_char: "にゃ",
        katakana_char: "ニャ",
        romaji: "nya"
    },
    {
        id: 85,
        hiragana_char: "にゅ",
        katakana_char: "ニュ",
        romaji: "nyu"
    },
    {
        id: 86,
        hiragana_char: "にょ",
        katakana_char: "ニョ",
        romaji: "nyo"
    },
    {
        id: 87,
        hiragana_char: "ひゃ",
        katakana_char: "ヒャ",
        romaji: "hya"
    },
    {
        id: 88,
        hiragana_char: "ひゅ",
        katakana_char: "ヒュ",
        romaji: "hyu"
    },
    {
        id: 89,
        hiragana_char: "ひょ",
        katakana_char: "ヒョ",
        romaji: "hyo"
    },
    {
        id: 90,
        hiragana_char: "みゃ",
        katakana_char: "ミャ",
        romaji: "mya"
    },
    {
        id: 91,
        hiragana_char: "みゅ",
        katakana_char: "ミュ",
        romaji: "myu"
    },
    {
        id: 92,
        hiragana_char: "みょ",
        katakana_char: "ミョ",
        romaji: "myo"
    },
    {
        id: 93,
        hiragana_char: "りゃ",
        katakana_char: "リャ",
        romaji: "rya"
    },
    {
        id: 94,
        hiragana_char: "りゅ",
        katakana_char: "リュ",
        romaji: "ryu"
    },
    {
        id: 95,
        hiragana_char: "りょ",
        katakana_char: "リョ",
        romaji: "ryo"
    },
    {
        id: 96,
        hiragana_char: "ぎゃ",
        katakana_char: "ギャ",
        romaji: "gya"
    },
    {
        id: 97,
        hiragana_char: "ぎゅ",
        katakana_char: "ギュ",
        romaji: "gyu"
    },
    {
        id: 98,
        hiragana_char: "ぎょ",
        katakana_char: "ギョ",
        romaji: "gyo"
    },
    {
        id: 99,
        hiragana_char: "じゃ",
        katakana_char: "ジャ",
        romaji: "ja"
    },
    {
        id: 100,
        hiragana_char: "じゅ",
        katakana_char: "ジュ",
        romaji: "ju"
    },
    {
        id: 101,
        hiragana_char: "じょ",
        katakana_char: "ジョ",
        romaji: "jo"
    },
    {
        id: 102,
        hiragana_char: "ぢゃ",
        katakana_char: "ヂャ",
        romaji: "ja"
    },
    {
        id: 103,
        hiragana_char: "ぢゅ",
        katakana_char: "ヂュ",
        romaji: "ju"
    },
    {
        id: 104,
        hiragana_char: "ぢょ",
        katakana_char: "ヂョ",
        romaji: "jo"
    },
    {
        id: 105,
        hiragana_char: "びゃ",
        katakana_char: "ビャ",
        romaji: "bya"
    },
    {
        id: 106,
        hiragana_char: "びゅ",
        katakana_char: "ビュ",
        romaji: "byu"
    },
    {
        id: 107,
        hiragana_char: "びょ",
        katakana_char: "ヒョ",
        romaji: "byo"
    },
    {
        id: 108,
        hiragana_char: "ぴゃ",
        katakana_char: "ピャ",
        romaji: "pya"
    },
    {
        id: 109,
        hiragana_char: "ぴゅ",
        katakana_char: "ピュ",
        romaji: "pyu"
    },
    {
        id: 110,
        hiragana_char: "ぴょ",
        katakana_char: "ピョ",
        romaji: "pyo"
    },
]

export default CHARACTERS;