//Строка считается заглавной, если каждое слово в строке либо (а) написано
// заглавной буквой (то есть только первая буква слова в верхнем регистре),
// либо (б) считается исключением и полностью помещается в строчными буквами,
// если только это не первое слово, которое всегда пишется с большой буквы.
//
// Напишите функцию, которая преобразует строку в заглавный регистр, учитывая
// необязательный список исключений (второстепенные слова). Список второстепенных слов
// будет представлен в виде строки, где каждое слово отделено пробелом. Ваша функция должна
// игнорировать регистр строки второстепенных слов — она должна вести себя так же, даже если
// регистр строки второстепенных слов изменен.


function titleCase(title, minorWords) {
    if (title.length < 1) {
        return title
    }
    let str = [];
    let arrMinorWords = minorWords !== undefined ? minorWords.toLowerCase().split(' ') : ''
    title.toLowerCase().split(' ').forEach((item, index) => {
        if (index === 0 || !arrMinorWords.includes(item)) {
            let firstLetter = item[0].toUpperCase()
            str.push(firstLetter + item.substr(1))
        } else {
            str.push(item)
        }
    })
    return str.join(' ')
}