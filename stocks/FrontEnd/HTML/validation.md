1. Form Validation 기능이 의미하는 것

```
Form Validation이란 데이터를 필요로 하는 곳에 데이터를 전달하기 전에 전달된 데이터가 잘 처리될 수 있도록 사전에 검증하는 것을 의미합니다. 

이 과정을 프론트엔드 환경에서 하는 이유는 크게 두 가지로 볼 수 있습니다. 첫째는 서버에서 발생되는 비용을 절감하는 것입니다. 서버 환경에서 데이터를 처리하기 위해 하는 일들을 프론트엔드 환경에 위임하여 데이터를 처리할 때 발생되는 비용을 줄이는 것입니다. 둘째는 UX(User Experience)입니다. 어플리케이션을 이용할 때 구현된 기능들을 어떻게 사용해야할 지 정확하게 인지할 수 있게 하고, 처리 과정에서 전달되는 메세지들을 사용자에게 정확하게 전달할 수 있게 하는 것입니다.

이 두가지의 관점으로 HTML5 스펙에서 구현된 Form Validation 기능들과 Validation 상태를 나타내기 위한 CSS 스펙들을 소개하겠습니다.
```

2. Form Validation의 기능

- Element

  1. 특별한 input 엘리먼트 type 값들

  input 엘리먼트의 다양한 type 값을 소개한 이유는 각 type 별로 도움이 되는 여러가지 기능들이 엘리먼트 내에 구현되어 있기 때문입니다. 엘리먼트를 작성하는 것만으로도 데이터 검증에 도움이되는 다양한 기능과 UI들이 적용되어 있으며, 유효하지 않은 값이 적용될 경우 보여지는 메세지 또한 각 type 값에 맞게 출력됩니다.

    - search
    - email
    - number
    - tel
    - url
    - month
    - week
    - range
    - date
    - datetime-local
    - datalist

  [input 엘리먼트 예시]()


- Attribute

```
  1. 입력된 데이터를 검증하는 기능
  
    required : required가 적용된 Form 요소는 반드시 데이터가 입력되어야 합니다. required가 적용된 요소에 데이터가 입력되어 있지 않다면, 데이터를 입력해야 한다는 메세지 노출이 되며, Form의 submit이 동작하지 않습니다.

    pattern : pattern을 적용하게 되면 정규 표현식을 적용할 수 있습니다.
    - textarea 엘리먼트는 적용되지 않습니다.
    - input 엘리먼트에서 일부 특정 타입들은 pattern이 필요하지 않습니다. (예: email)

    minlength, maxlength : text 타입의 데이터의 길이를 제한합니다.

    min, max : number 타입의 테이터의 크기를 제한합니다.

    * required 조건을 충족하지 않더라도 required를 제외한 다른 조건들이 적용되어 있을 경우 적용된 조건들을 만족시키지 않아도 submit되지 않습니다.

  2. 데이터가 잘 입력될 수 있도록 안내하는 기능

    step : number 타입의 input 엘리먼트에 적용되는 Attribute입니다. 증감하는 크기를 설정합니다.

    size : 입력할 수 있는 데이터의 길이를 제한합니다. 입력을 제어하지 않고 size에 입력한 크기의 길이를 넘어가면 데이터가 보이지 않습니다.

    placeholder : 데이터를 입력할 때 도움이 되는 문구를 삽입할 수 있습니다.
```

- CSS

```
  IE의 경우 11부터 적용되는 validation을 위한 가상 클래스가 존재합니다.

    :valid     : 엘리먼트가 유효성을 통과한 상태일 경우 적용되는 스타일을 정의합니다.
    
    :invalid   : 엘리먼트가 유효성을 통과하지 않은 경우 적용되는 스타일을 정의합니다.

    :required  : 엘리먼트가 required 조건에 충족한 경우 적용되는 스타일을 적용합니다.

    :out-of-range : range 범위를 넘어가는 값이 입력됐을 때 적용되는 스타일을 정의합니다.
```

- UX
  
 1. 사용자가 입력란을 봤을 때 직관적으로 필수적으로 입력해야 하는 데이터가 어떤 것인지 인식할 수 있도록 해야합니다.
  보통은 필수로 입력해야 한다는 의미를 부여하기 위해 input 설명을 위한 label에 asterisk(*)를 붙입니다. 그러나 * 기호를 Required의 의미로 인식하지 못하는 웹 경험이 없는 사용자들을 위해 'Required' 문구를 적용하기도 합니다.
  
 2. 다양한 정보를 입력하는 경우 데이터 입력이 끝날 시 바로 유효성을 체크하여 invalid 상태를 알리도록 합니다.

 3. 복잡한 패턴을 요구하는 데이터 혹은 입력하는 정보의 범위가 다양할 경우 placeholder 또는 입력란 옆에 도움이 되는 문구를 적용해 처음 입력 시 정확하게 데이터를 입력할 수 있도록 돕습니다.



- Invalid message in browser

  invalid 상태인 input 엘리먼트가 focus 상태일 경우 브라우저에서는 input에 적용된 type에 알맞는 경고메세지를 출력합니다. 이 메세지의 언어는 브라우저에 적용된 언어에 종속되어 있습니다 중국어로 표현되는 브라우저는 input 메세지도 중국어로 표현합니다.


- HTML5 Validation methods and properties

  HTML5는 엘리먼트 내에 validation과 관련된 메서드와 프로퍼티를 제공합니다.
  이 메서드는 엘리먼트 내에 있는 메서드입니다.

  - 프로퍼티
    #div.validity.customError