import React from 'react'

function Comentario() {
    return (

        <div class="comments">
                            
            <div class="comment">
                <div class="comment-avatar">
                    <img src="http://gravatar.com/avatar/412c0b0ec99008245d902e6ed0b264ee?s=80" />
                </div>

                <div class="comment-box">
                    <div class="comment-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto temporibus iste nostrum dolorem natus recusandae incidunt voluptatum.</div>
                    <div class="comment-footer">
                    <div class="comment-info">
                        <span class="comment-author">
                        <a href="#">Nome Usuário</a>
                        </span>
                        <span class="comment-date">Feb 2, 2013 11:32:04 PM</span>
                    </div>

                    <div class="comment-actions">
                        <a href="#">Avaliar como útil</a>
                    </div>
                    </div>
                </div>
                </div>

                <div class="comment">
                    <div class="comment-avatar">
                        <img src="https://placeimg.com/1080/500" />
                    </div>

                    <div class="comment-box">
                        <div class="comment-text">Eligendi voluptatum ducimus architecto tempore, quaerat explicabo veniam fuga corporis totam reprehenderit quasi sapiente modi tempora at perspiciatis mollitia, dolores voluptate. Cumque, corrupti?</div>
                        <div class="comment-footer">
                        <div class="comment-info">
                            <span class="comment-author">
                            <a href="#">Nome Usuário</a>
                            </span>
                            <span class="comment-date">Jan 31, 1986 11:32:04 PM</span>
                        </div>

                        <div class="comment-actions">
                            <a href="#">Avaliar como útil</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Comentario;