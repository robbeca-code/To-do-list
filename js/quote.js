const quotes = [
    {
        quote : '자기자신을 사랑해라',
        author : '니체'
    },
    {
        quote : '지금까지 아무것도 이루지 못했을지더라도, 자신을 항상 존귀한 인간으로 대하라',
        author : '니체'
    },
    {
        quote : '인생의 가장 큰 후회 중 하나는 스스로 원하는 사람이 아닌 다른 사람이 원하는 사람이 되는 것이다.',
        author : '섀넌 알더'
    },
    {
        quote : '누군가 꽃을 가져다 주기를 기다리지 말고 자신만의 정원과 영혼을 가꿔라.',
        author : '베로니카 쇼프스톨'
    },
    {
        quote : '하루종일 당신에게 말을 거는 가장 영향력 있는 사람은 바로 자신이다. 그렇기에 스스로에게 말하는 것을 매우 조심해야 한다.',
        author : '지그 지글러'
    },
    {
        quote : '당신이 하락하는 만큼 당신은 놀라운 사람이 될 수 있다.',
        author : '엘리자베스 알론'
    },
    {
        quote : '성공한 사람들도 두려움, 의심 걱정을 가지고 있다. 다만 이것들이 그들을 멈추게 하지 않는다.',
        author : 'T. 하브 에커'
    }
];

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

const quoteArray = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = `${quoteArray.quote} \n`;
author.innerText = `${quoteArray.author} \n`;