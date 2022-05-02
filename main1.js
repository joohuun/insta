        var count = 10;
        window.onscroll = function (e) {
            console.log(window.innerHeight, window.scrollY, document.body.offsetHeight)
            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
                setTimeout(function () {
                    var addContent = document.createElement("div");
                    addContent.classList.add("cards")
                    addContent.innerHTML = `        <div class="cards ">
            <div class="card_top"> <!--스토리 상단-->
                <div class="box"> <!--스토리 상단.프사틀-->
                    <img class="profile_img"
                         src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTExMDdfMjE3%2FMDAxNjM2Mjc3MjU5MTQy.ltys7zGqWWmUxzrVEz87nfkV8wWl3vYeYHntA7mrHNwg.E6sJDDY45FRqoZx0Vz7E8-Urz6RWj2YIqWcBU39_Y1Ug.JPEG.thisismeji617%2FIMG_0519.JPG&type=sc960_832">
                </div>
                <div class="profile_name"> <!--스토리 상단 프사 이름-->
                    <b>JOOHUUN</b>
                </div>
            </div>
            <div class="card_mid"> <!--스토리 중단-->
                <div class="mid_img"> <!--스토리 중단.이미지-->
                    <img style="width: 98%; height: 98%"
                         src="https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20220129_244%2F1643388623958mAqrn_JPEG%2F1593230565064.jpg&type=sc960_832">
                </div>
            </div>
            <div class="card_bottom"> <!--스토리 하단-->
                <div class="bottom_icons"> <!--스토리 하단 아이콘-->
                    <div>
                        <span class="material-icons-outlined">favorite_border</span>
                        <span class="material-icons-outlined">mode_comment</span>
                        <span class="material-icons-outlined">send</span>
                    </div>
                    <div class="bottom_icons_border">
                        <span class="material-icons-outlined">bookmark_border</span>
                    </div>
                </div>
                <div style="text-align: left; font-size:14px; padding-left: 2.5%">
                    <b>좋아요 57개</b>
                </div>
                <div style="text-align: left; font-size:14px; padding: 1% 0 0 2.5%;">
                    <b>JOOHUUN</b> 너무 맛있고~
                </div>
            </div>
            <div class="comment">
                <div style="border-top: solid 1px #e1dbdb">
                    <input type="text" class="form-control" placeholder="댓글달기..."
                           style="box-shadow: none; padding-top:2%; border: none; outline: none">
                </div>
            </div>
        </div>
`                // addContent.innerHTML = `<p>${++count}번째 블록</p>`
                    document.querySelector('section').appendChild(addContent);
                }, 200)
            }
        }