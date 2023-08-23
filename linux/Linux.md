# Linux

## 목차

-   리눅스란
-   리눅스 구조
-   리눅스 특징 구조
-   우분투
-   CLI
-   디렉토리 구조
-   사용자 계정
-   다운로드

## 리눅스란 ?

리누즈 토발즈(Linus Torvalds)에 의해 만들어진 컴퓨터 운영체제로, 자유 소프트웨어와 오픈 소스 개발의 가장 유명한 표본입니다. 컴퓨터 역사상 가장 많은 참여자가 관여하고 있는 오픈소스로 누구나 개발에 참여하고 코드를 볼 수 있는 프로젝트입니다.

아, 참고로 이 펭귄은 리눅스의 마스코트로 이름은 턱스(Tux)입니다.

또한, 리눅스는 GNU 프로젝트의 일환입니다. GNU 프로젝트란, **"GNU(그누) is not Unix(원래 문장 안에 자신이 이미 들어있는 재귀 약자)"**의 줄임말로, 리처드 스톨먼의 주도하에 시작된 공개 소프트웨어 프로젝트입니다.
유닉스 운영체제를 각자의 회사에서 개발하고 소스 코드를 공유하지 않는 문화에 대한 반발로 생겼습니다. 자유 소프트웨어라는 철학을 가지고 있으며, 스톨만은 첫 선언문에 이은 GNU 선언문을 비롯한 여러 글들을 통해서 **"초기 전산 공동체에 지배적이었던 협동 정신을 되돌리자"**고 주장했습니다.

## 리눅스 구조

_카카오톡_, _Excel_, _Chrome_ `응용 프로그램`

`Shell` `OS`

## 리눅스 특징 구조

리눅스는 유닉스 라는 운영체제 기반으로 하고있다.
뛰어난 안정성과 보안성, 높은 신뢰성과 성능 특징

`멀티 유저` 와 `멀티 태스킹` 지원

컴퓨터를 키면
`계정명`
`패스워드`

-   `User`

ingoo - block8
web7722 - blockchain10

공통으로 사용할 디렉토리
권한설정

리눅스 CLI, GUI

## 우분투

`Linux` 라는 `OS`에서 하나의 제품군

> 리눅스에 다른 제품군들을 검색해보세요

## CLI

1. 내가원하는 디렉토리에 이동하기

    - cd /

2. 디렉토리 생성하기

    - mkdir [폴더명] cli
    - mkdir cli

3. 메모장 열기
4. 메모장 입력
5. 파일 저장하기
6. 파일 닫고
7. 다시 파일 열기

CLI `실습`

-   `pwd` : /mnt/c/Users/pc-007/Documents/blockchain10/javascript/230814
-   `cd` : `cd [명령내용]`
    -   `[명령내용]` : 디렉토리를 상대경로, 절대경로
    -   `.. , .` : ../ ./
    -   `~` : Home 디렉토리

```sh
$ /mnt/c/Users/pc-007/Documents/blockchain10/javascript/230814
$ cd ..

## /mnt/c/Users/pc-007/Documents/blockchain10/javascript

$ ls

## 230803  230804  230807  230808  230809  230811  230814


$ cd ./230814
$ pwd

## /mnt/c/Users/pc-007/Documents/blockchain10/javascript/230814

$ cd ~
$ pwd

## /home/ingoo

# /home/ingoo
# /home/tmp1
# /home/user1

# ingoo, tmp1, user1

$ mkdir cli
$ ls
$ cd ./cli
$ ls


$ vi hello

vi mode
:q


$ vi hello

vi mode
[Mode] view insert
-- INSERT --

TEXT를 마음껏 쓸수있음 !!

`ESC`

:w
:q

:wq

cat [파일명]

ls -l
ls -al

-rw-r--r-- 1 ingoo ingoo 51 Aug 14 11:27 hello

- : 파일
d : 디렉토리

10

- --- --- ---

rwx rwx rwx

```

## vi 에디터에 대한 명령어

:q

## 디렉토리 구조

`/`

```sh
$ cd /
```

-   /bin : 리눅의 기본적인 명령어가 저장된 디렉토리
-   /etc : 환경설정에 관련된 부분이 저장되어있어요
-   /home : `cd ~` 홈디렉토리
-   /lib : 커널모듈파일과, 라이브러리 파일이 저장됨
-   /var : 로그성 데이터들이 많이 모여있씁니다.
-   /mnt : 새로운드라이버

## 다운로드

리눅스는 기본적으로 파일을 다운받을때 인터넷을 사용한다.

apt-get
apt

git 수업

```sh
sudo brew install mysql

```

nvm --version
mysql --version

```sh
sudo apt update

sudo apt update
sudo apt upgrade

sudo apt install mysql-server
mysql --version
```
