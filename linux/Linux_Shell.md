# Linux 쉘

쉘 -> 커널 -> 하드웨어

1. bash
2. sh
3. zsh

linux를 설치하면 나오는게 `bash`
mac `bash` -> `zsh`

```sh

$ zsh --version

$ sudo apt install zsh

$ sudo chsh -s /usr/bin/zsh ingoo
$ grep ingoo /etc/passwd

$ whoami
$ grep [사용자명] /etc/passwd
# ingoo:x:1000:1000:,,,:/home/ingoo:/bin/zsh

$ echo $SHELL




$ cd ~
$ source ~/.zshrc


```

## chsh: PAM: Authentication failure 오류시

```sh
$ sudo vi /etc/pam.d/chsh

auth       required   pam_shells.so
# 이친구를 주석처리해야함
# auth       required   pam_shells.so
```

zsh 설치 진행됨

zsh 설치를하구요,

```sh

$ cd ~
$ ls -al

$ sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"

$ ls -al
$ vi .zshrc


agnoster

source ~/.zshrc


sudo apt install fonts-powerline

ctrl + ,


fonts-powerline
D2Coding


$ vi .zshrc

# 맨마지막에 아래코드 삽입
prompt_context() {
   if [[ "$USER" != "$DEFAULT_USER" || -n "$SSH_CLIENT" ]]; then
     prompt_segment black default "%(!.%{%F{yellow}%}.)$USER"
   fi
}

저장후

source .zshrc
```
