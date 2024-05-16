import React from 'react'

const Contact = () => {
  return (
    <section className="order reveal" id="للتواصل_معنا_والحجز">
      <div className="header-sec mb-[50px]">
        <h1 className="main_title_Articles-one">للتواصل معنا</h1>
        <h1 className="main_title_Articles-two z-10">كل ما تتمناه لدينا</h1>
      </div>
    <form action="" name="myForm">
        <div className="bg">
            <div className="form">
                {/* <div className="left"> */}
                    <div className="input">
                        <label htmlFor="name">الاسم</label>
                        <input type="text" name="fname" id="name" placeholder="الاسم" />
                    </div>
                    <div className="input">
                        <label htmlFor="order">اليريد الالكتروني</label>
                        <input type="text" name="fname" id="order" placeholder="اليريد الالكتروني" />
                    </div>
                    <div className="input">
                        <label htmlFor="many">رقم الهاتف</label>
                        <input type="text" name="fname" id="many" placeholder="رقم الهاتف" />
                    </div>
                {/* </div> */}
                {/* <div className="right"> */}
                    <div className="input">
                        <label htmlFor="food">عنوانك</label>
                        <input type="text" name="fname" id="food" placeholder="عنوانك" />
                    </div>
                    <div className="input">
                        <label htmlFor="address">طلبك</label>
                        <textarea name="fname" id="address" placeholder="طلبك"></textarea>
                    </div>
                {/* </div> */}
            </div>
            <div className="btn">
                <a href="#">ارسال</a>
            </div>
        </div>
    </form>
</section>
  )
}

export default Contact
