# Github

git

원격저장소 - github

http://github.com

1. Repo만들기

2. Repo에 Commit 올리기 2. 내가 만든 저장소는 나만 올려야 합니다.
   내가 나임을 어떻게 증명하는가 ?
   인터넷에서는 ID/PW

3. 내가 나임을 증명하는 방법중 `Token` 이라는 방법으로 사용을 할겁니다.

    토큰 -> 임의 에 키값이다. eiowrjqiowehriouqwheriuopqewhriohqweopirhopqihweoprhoipwehr

    `web7722` - eiowrjqiowehriouqwheriuopqewhriohqweopirhopqihweoprhoipwehr
    `web7722` - WSL_token

    PC - WSL_Token
    Mac - Token
    desktop - h_token

4. 아니 그러면 ToKen을 외울순 없잖아...

    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
    이 토큰을 저장하는 공간이 있어요
    `OS`

    keychain

    자격증명

    window -> wsl2

    git 자체에서도 존재하기는 합니다.

## Window 일반 자격증명

C:\Program Files\Git\mingw64\libexec\git-core\git-credential

윈도우기준으로 개발을 진행할떄 `\`

```sh
$ cd ~
$ mkdir github
$ cd github

$ git config --global credential.helper "/mnt/c/Program\ Files/Git/mingw64/bin/git-credential-manager-core.exe"
# /mnt/c/Program\ Files/Git/mingw64/bin/git-credential-manager-core.exe
$ git config --list
```

```js
const str = "C:\\Program Files\\Git\\mingw64\\libexec\\git-core\\git-credential"
```

username
passwod

## github connection

https://github.com/ingoo-blockchain/code.git

```sh
git init

echo "# code" >> README.md

git remote add aa https://github.com/ingoo-blockchain/code.git



git push -u origin main
```

git:https://github.com

```sh
git remote
git push
git pull
git clone
```

내가 내로컬에 .git 존재할경우

```



```
