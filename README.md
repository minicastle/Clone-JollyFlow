- - -
# 정성민의 Clone Codig - JollyFlow
## 1. Clone 사이트 선택이유
---
> 이러한 형태의 사이트는 일반 기업에서 사용하지 않는 형태의 디자인 입니다. <br><br>
> 하지만 웹 화면은  사용자에게 직접적으로 보이기 때문에 정형화된 형태만이 아닌 <br><br>
> 다양한 디자인의 형태를 알고 있어야 하고 어떤 형태든 <br><br>
> 구현 가능한 것이 웹개발자에게 가장 중요한 덕목이 아닐까 생각하여 <br><br>
> Clone Coding에 도전하게 되었습니다.
---
## 1.1. JollyFlow 사이트 선택이유
---
> 크리스마스 5일전쯤 WebFlow에서 Clone Coding을 할 템플릿을 찾다보니 크리스마스 관련 템플릿이 있었고 <br>
> 또한 <br>
> 이벤트성 프로젝트를 진행하게 되었을때 조금이라도 도움이 되지 않을까 하는 생각에 크리스마스 카드 제작 Template인 JollyFlow를 선택하게 되었습니다.
---
## 2. 개발과정
---
>## 1. CRA(Create React App)을 이용하여 React 환경구축
> -  간단한 Clone Coding 프로젝트 이기 때문에 CRA를 통해 개발환경을 구축하였습니다.
>> CRA는 사용하지 않는 기능들도 들어가기 때문에 최적화에는 용이하지 않은 방법이지만 간단한 Clone 프로젝트 이기 때문에 개발환경을 자동으로 설정해주는 CRA를 사용하였습니다.

>## 2. react-router-dom을 이용하여 Routing진행
> - App.js에 BrowserRouter를 이용하여 라우터 설정을 하고 메인 페이지와 잘못된 접근 404페이지 구현
>>NodeJS와 Express를 이용하여 서버를 구축하여 Routing설정을 호스팅으로 사용사용 할 수도 있지만 이 프로젝트는 Clone Coding으로 정적인 사이트를 업로드 하는 방식 이었기 때문에 최소한으로 Routing기능을 사용하기 위해 react-router-dom을 사용하였습니다.

>## 3. @emotion/styled를 사용하여 페이지 및 Component css 스타일 지정
> - .css 파일을 통한 스타일 지정이 아닌 emotion의 styled 패키지를 이용하여 css-in-js방식의 스타일 코드를 작성
>> - 일반 css파일 처럼 분리되어 가독성이 뛰어난 편은 아니지만 sass형식의 스타일 시트 작성이 가능하다.
>> - className 자동으로 부여되기 때문에 스타일이 겹치는 염려를 줄일수 있다.
>> - css code의 재사용이 편하다.

>## 4. Page와 Component로 구분을 정하고 제작
> - Page와 Component는 분류를 하지 않고 사용하더라도 문제가 없지만 이후 요소의 추가 혹은 유지보수시 구분이 편하도록 분리하여 진행
>> - Component는 다른 화면으로 넘어가더라도 재사용 빈도가 높거나 혹은 정적인 요소들 위주로 분류하였다.
>> - Page는 화면을 구성할때 특정 페이지에서만 로드되는 요소 혹은 동적으로 변경이 되는 경우를 위주로 분류 하였다.
---
## 3. 개발이후 생각한 사이트 개선점 & 배운점
---
## 개선점

>### 1. 이미지 로딩 오류
> - 기존 페이지는 이미지 모두의 로딩을 lazy로 설정하여 로딩시간을 조절하여 리소스를 줄이는데 중점을 두었지만 <br>
 페이지를 구성하는 요소중 로딩에 영향을 끼치는 부분이 적은 부분은 로딩을 뒤로 미루지 않고도 유지할 수 있을 정도의 가벼운 페이지입니다. <br>
 따라서 Snow flake같은 화면 구성시 리소스가 적은 이미지는 로딩을 lazy로 설정하는 것이 아닌 component가 로드 될때 바로 받아오거나 <br>
 혹은 source에 포함시켜서 반복되는 리소스를 감소시키는 것이 좋은 방법이었다고 생각합니다.

<img src='https://github.com/minicastle/Clone-JollyFlow/blob/master/readmeimage/error1.PNG' width="300px">

>### 2. 카드 이미지의 사이트 통일
> - 기존 페이지는 카드 선택 페이지의 이미지들이 통일된 사이즈를 가지지 않았기 때문에 카드를 선택 할 당시 카드의 이미지가 밀려보이게 되었습니다. <br> 
 **이러한 부분은 사이트의 완성도에 영향을 줄수 있는 오류**이기 때문에 카드 이미지의 사이즈를 제작당시 통일하여 만들어야 합니다. <br>
 혹은 이미지를 담고있는 container의 사이즈를 지정하고 display:flex, justifyContents:center, alignItems:center로 스타일을 지정하여 사용한다면 이미지의 사이즈와 상관없이 가운데에 표시되도록 할 수 있습니다.

<img src='https://github.com/minicastle/Clone-JollyFlow/blob/master/readmeimage/error2.PNG' width="300px">


---
### ◤ 정성민의 다른 프로젝트 ◢
| Project Name              | Source Code           | Original Site             |
| :--                       | :--:                  | :--                       |
|[포트폴리오](https://minicastle.github.io/portpolio/)|||
|[Colco(Clone)](https://minicastle.github.io/Clone-Colco/)|[git](https://github.com/minicastle/Clone-Colco)|[Colco(origin)](https://colco.app/)|
|[Jolly-Flow(Clone)](https://minicastle.github.io/Clone-JollyFlow/)|[git](https://github.com/minicastle/Clone-JollyFlow)|[Jolly-Flow(origin)](https://jollyflow.webflow.io/)|
|[kakao(Clone)](https://minicastle.github.io/Clone-Kakao/)|[git](https://github.com/minicastle/Clone-kakao)|[kakao(origin)](https://www.kakaocorp.com/page/)|

> [정성민의 GitHub](https://github.com/minicastle)

> ### 이메일 링크: <minicastle@kakao.com>
---
## ※개발에 사용된 언어 및 npm package※
---
|Package Name                 	| version  	    |
| :--                         	| :--:     		|
|@emotion/react 		        |^11.10.5		|
|@emotion/styled 		        |^11.10.5		|
|@testing-library/jest-dom 	    |^5.14.1		|
|@testing-library/react 	    |^13.0.0		|
|@testing-library/user-event    |^13.2.1		|
|gh-pages 		                |^4.0.0		    |
|react 			                |^18.2.0		|
|react-dom 		                |^18.2.0		|
|react-icons 		            |^4.7.1		    |
|react-router-dom 		        |^6.5.0		    |
|react-scripts 		            |5.0.1		    |
|web-vitals 		            |^2.1.0		    |
---