import React from 'react';

export default function SubmitComment() {
    return (
        <div className="sidebar-item submit-comment">
            <div className="sidebar-heading">
                <h2>
                    Your Comment
                </h2>
            </div>
            <div className="content">
                <form action="#" id="comment" method="post">
                    <div className="row">
                        <div className="col-md-6 col-sm-12">
                            <fieldset>
                                <input type="text" name="name" id="name" placeholder="Your name" required="" />
                            </fieldset>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <fieldset>
                                <input type="email" name="email" id="email" placeholder="Your email" required="" />
                            </fieldset>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <fieldset>
                                <input type="text" name="subject" id="subject" placeholder="subject" />
                            </fieldset>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <fieldset>
                                <input type="text" name="message" id="message" placeholder="Type your comment" required="" />
                            </fieldset>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <fieldset>
                                <button type="submit" id="form-submit" className="main-button" >Submit</button>
                            </fieldset>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}