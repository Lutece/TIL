Form Validation

1. 서버 비용을 줄일 수 있다.
2. 사용자에게 더 좋은 경험을 제공해줄 수 있다.

1-1.
  다양한 input type

    형식
      - text
      - password
      - email
      - tel
      - url
      - file
    범위
      - number
      - range
      - color
    날짜
      - time
      - month
      - week
      - date
      - datetime-locale
    상태
      - hidden
      - image
      - button
    리스트
      - select
      - radio
      - checkbox
      - datalist
    폼
      - reset
      - submit

  type 값이 다양한 이유
    1. 형식에 맞는 Validation 기능이 들어있다.
      - 형식에 맞지 않는 데이터를 전송하려는 경우 form의 submit이 동작하지 않음.
    2. Validation 에러 메세지가 표현된다.
      - 브라우저 언어에 종속되어 표현된다. localization 문제가 해결됨.
    3. 형식에 맞는 데이터가 입력되도록 도와주는 Attribute가 있다.
      - number 타입의 step 등..

1-2.
  다양한 Attributes
    입력
      - required
      - pattern
    제한
      - readonly
      - size
      - maxlength, minlength
      - min, max
    제어
      - step
      - multiple
    특정 타입
      - list ( for datalist )
    메세지
      - placeholder

1-3.
  유효성을 위한 CSS
    가상 클래스
      - :valid
      - :invalid
      - :required
      - :out-of-range

1-4.
  결점
    - 브라우저의 validation look and feel은 제어할 수 없다.
    - 브라우저의 메세지는 하나의 언어로만 보일 수 있도록 제어할 수 없다.

1-5.
  HTML5 API
    - property

        - formnovalidate : validate 과정을 생략하도록 설정
        - willValidate : submit 과정 이후 요소가 valid 한지 알려줌 (Boolean)
        - validationMessage : 브라우저가 전달하는 validation 메세지 정보를 담고 있다.
        - validity : 값에 대한 상태정보를 프로퍼티 형태로 갖고 있음.
      
        범위 체크
          - validity.rangeOverflow
          - validity.rangeUnderflow
          - validity.stepMismatch
          - validity.tooLong

        형식 체크
          - validity.typeMismatch
          - validity.patternMismatch

        값 체크
          - validity.valid
          - validity.valueMissing

        설정 체크
          - validity.customError
      
    - method
      form 요소들을 위한
        - setCustomValidity(message)
        - checkValidity()
      form을 위한
        - HTMLFormElement.reportValidity()

1.6 validation과 한글
