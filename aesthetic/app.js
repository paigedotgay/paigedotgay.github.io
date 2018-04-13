const possibleBackgrounds = [
    "http://i0.kym-cdn.com/entries/icons/original/000/017/166/maxresdefault.jpg",
    "http://expertherald.com/wp-content/uploads/2018/01/Aesthetics-1.jpg",
    "https://i.redd.it/8ncj88qz0evy.jpg",
    "https://pre00.deviantart.net/560f/th/pre/f/2016/112/3/2/a_e_s_t_h_e_t_i_c_by_aplasticchair-d9zv7eu.jpg",
    "https://wallpaperstudio10.com/static/wpdb/wallpapers/1920x1080/173982.jpg",
    "http://i.imgur.com/MlXivrM.png",
    "https://wallpapercave.com/wp/wp1836699.jpg",
    "https://cdn-images-1.medium.com/max/1350/1*uoF2sH24PfZ2cweStQ5Dvw.png",
    "https://i.redd.it/al98nvymh16z.png",
    "https://www.dailydot.com/wp-content/uploads/2df/49/e81457441dc6ef958e055d997bdd43a9.jpg",
    "https://www.dailydot.com/wp-content/uploads/97a/d8/246354a6d4005e451bffc5eb98c9b00a.jpg",
    "https://szftlgs.com/wp-content/uploads/data/2018/1/3/BSB-Snow-WSW1025133.png",
    "https://cdn74.picsart.com/192879162002202.jpg?r1024x1024",
    "http://aesthetic-meme.neocities.org/mmmm%20sweet%20aesthetic.jpg",
    "http://monodomo.com/free-wallpapers/aesthetic-vaporwave-wallpaper-for-android-For-Free-Wallpaper.png",
    "http://hennepinonline.info/wp-content/uploads/2018/02/awesome-aesthetic-wallpapers-desktop-free-2.jpg"
];

const astheticObjects = [
    "http://78.media.tumblr.com/c4e64470ef81877eb1b81120aec4bb3d/tumblr_ojp25pUjQz1twgsxao1_1280.png",
    "http://78.media.tumblr.com/776944b6b537814676c7fb4a07257d75/tumblr_ojapah6qrK1twgsxao1_400.png",
    "https://img00.deviantart.net/72e4/i/2017/198/e/5/aesthetic_welcome_bar___f2u_by_unluckii_yarn-dbgobzq.png",
    "http://78.media.tumblr.com/a76883d53195063069e74ef75a2b9e8c/tumblr_nxi30aquNe1ujzfboo1_1280.gif",
    "http://78.media.tumblr.com/90988084e1e4009d91098509c89a2c86/tumblr_opntc3TV9j1tlgv32o2_540.gif",
    "https://i.pinimg.com/originals/e1/1f/f9/e11ff9150160dcb1eb0a7d803adc71c5.png",
    "http://36.media.tumblr.com/53fba7e7ee788971e4cf8616fa304168/tumblr_nbvgt7gven1txe8e9o1_500.png",
    "http://78.media.tumblr.com/450f57fdde7ed433e76733473d897c1a/tumblr_ojbij7ZuOl1twgsxao1_1280.png",
    "https://orig00.deviantart.net/deb1/f/2017/094/0/e/ughhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh_by_tokyodaze_aesthetic-db4ocm7.gif",
    "https://cdn170.picsart.com/upscale-239702215005212.png?r1024x1024",
    "http://78.media.tumblr.com/ab5ca1c5d15333f9e543a79e2ca0d627/tumblr_om65i5attk1vheq2do1_1280.gif"
];

const aestheticDict = {
    'a': 'ａ', 
    'b': 'ｂ',
    'c': 'ｃ',
    'd': 'ｄ',
    'e': 'ｅ',
    'f': 'ｆ',
    'g': 'ｇ',
    'h': 'ｈ',
    'i': 'ｉ',
    'j': 'ｊ',
    'k': 'ｋ',
    'l': 'ｌ',
    'm': 'ｍ',
    'n': 'ｎ',
    'o': 'ｏ',
    'p': 'ｐ',
    'q': 'ｑ',
    'r': 'ｒ',
    's': 'ｓ',
    't': 'ｔ',
    'u': 'ｕ',
    'v': 'ｖ',
    'w': 'ｗ',
    'x': 'ｘ',
    'y': 'ｙ',
    'z': 'ｚ',
    'A': 'Ａ',
    'B': 'Ｂ',
    'C': 'Ｃ',
    'D': 'Ｄ',
    'E': 'Ｅ',
    'F': 'Ｆ',
    'G': 'Ｇ',
    'H': 'Ｈ',
    'I': 'Ｉ',
    'J': 'Ｊ',
    'K': 'Ｋ',
    'L': 'Ｌ',
    'M': 'Ｍ',
    'N': 'Ｎ',
    'O': 'Ｏ',
    'P': 'Ｐ',
    'Q': 'Ｑ',
    'R': 'Ｒ',
    'S': 'Ｓ',
    'T': 'Ｔ',
    'U': 'Ｕ',
    'V': 'Ｖ',
    'W': 'Ｗ',
    'X': 'Ｘ',
    'Y': 'Ｙ',
    'Z': 'Ｚ',
    ' ': '  '
};

let japaneseEnabled = true;

const japanese = [
    'ｦ', 'ｧ', 'ｨ', 'ｩ', 'ｪ', 'ｫ', 'ｬ', 'ｭ', 'ｮ', 'ｯ', 'ｱ', 'ｲ', 'ｳ', 'ｴ', 'ｵ', 'ｶ', 'ｷ', 'ｸ', 'ｹ', 'ｺ', 'ｻ', 'ｼ', 'ｽ', 'ｾ', 'ｿ', 'ﾀ', 'ﾁ',
    'ﾂ', 'ﾃ', 'ﾄ', 'ﾅ', 'ﾆ', 'ﾇ', 'ﾈ', 'ﾉ', 'ﾊ', 'ﾋ', 'ﾌ', 'ﾍ', 'ﾎ', 'ﾏ', 'ﾐ', 'ﾑ', 'ﾒ', 'ﾓ', 'ﾔ', 'ﾕ', 'ﾖ', 'ﾗ', 'ﾘ', 'ﾙ', 'ﾚ', 'ﾛ', 'ﾜ', 'ﾝ'];


const selectRandom = (array) => { return array[Math.floor(Math.random() * array.length)] };

$(document).ready( () => {
    $('body').css('background-image', `url(${selectRandom(possibleBackgrounds)})`);
    $('body').css('background-size', 'cover');
    $('body').css('background-repeat', 'repeat');
    $('body').css('background-position', 'top left');

    let timer = setInterval(cycleJapanese, 50);
});

$("#aesthetic-button").click( () => {
    let text = $('#aesthetic-text-area').val();
    let newPhrase = []
    if (japaneseEnabled) newPhrase.push(document.getElementById("japanese-area").innerHTML);
    for (let letter of text) {
        if (aestheticDict[letter]) {
            newPhrase.push(aestheticDict[letter]);
        } else {
            newPhrase.push(letter);
        }
    }
    if (japaneseEnabled) newPhrase.push(`${selectRandom(japanese)}${selectRandom(japanese)}${selectRandom(japanese)}`);
    $('#aesthetic-text-area').val(newPhrase.join(""));
});

$("#copy-button").click( () => {
    $("#aesthetic-button").trigger("click");
    $("#aesthetic-text-area").select();
    document.execCommand("copy");
});

$("#japanese-toggle-button").click( () => {
    const elem = document.getElementById("japanese-toggle-button")
    if (japaneseEnabled) {
        elem.classList.add("btn-danger");
        elem.classList.remove("btn-success");
        elem.innerHTML = "no japanese";
        japaneseEnabled = false;
    } else {
        elem.classList.add("btn-success");
        elem.classList.remove("btn-danger");
        elem.innerHTML = "yes japanese";
        japaneseEnabled = true;
    }
});

function cycleJapanese() {
    if (japaneseEnabled) document.getElementById("japanese-area").innerHTML = 
        `${selectRandom(japanese)}${selectRandom(japanese)}${selectRandom(japanese)}`;
}
