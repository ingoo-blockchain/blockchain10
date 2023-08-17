# 사용자

`멀티 유저` : 여러사용자가 동시에 하나에 시스템에 접근이 가능했다.

_디렉토리_ 와 _파일_ 에게 권한을 부여할수있다.

`A` 계정
`B` 계정

```sh

$ whoami
[계정명]


# word >> hello world!
$ vi ~/word

# -rw-r--r--  1 ingoo ingoo     13 Aug 17 10:58 word

cat word

# rw- r-- r--



# 421
# rw-


# 6 -> rw-
# 5 -> r-x
# 4 -> r--
# 7 -> rwx


# -           rw-          r--              r--
# [파일타입][소유자권한][그룹소유자권한][그외사용자권한]

# 권한은
# r : read (읽기, 4)
# w : write (쓰기, 2)
# x : execution (실행, 1)


# 3 -> -wx
# 6 -> rw-
# 5 -> r-x
# 4 -> r--
# 7 -> rwx

```

## chmod

```sh
# -rw-r--r--
# ----r--r--

# 444

$ sudo chmod 444 ./word
$ sudo chmod 044 ./word
$ sudo chmod 644 ./word

```

`root` 계정

Linux OS

**User 타입**

-   루트 사용자 - UID 0
-   시스템 사용자 - UIDs 1-999
-   일반 사용자 - UIDs 1000 ~ n

```sh
$ id

# uid=1000(ingoo) gid=1000(ingoo) groups=1000(ingoo),4(adm),20(dialout),24(cdrom),25(floppy),27(sudo),29(audio),30(dip),44(video),46(plugdev),117(netdev),1001(docker)

$ id [user]

```
