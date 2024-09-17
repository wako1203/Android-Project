import React from 'react';
import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles(theme => ({
  extraTop: {
    marginTop: theme.spacing(11)
  },
  textCenter: {
    textAlign: 'center',
    marginTop: theme.spacing(3)
  },
  container: {
    padding: 0,
    margin: 'auto',
    width: '800px'
  },
  content: {
    marginTop: theme.spacing(3)
  }
}))

export default function Roadd(){
   const classes = useStyles()

      return (
      <div className={classes.extraTop}>
        <div className={classes.container}>
        <img style={{display: 'block', margin: '0 auto'}} src='https://codelearn.io/Upload/Blog/lo-trinh-hoan-chinh-cho-front-end-developer-nam-2020-63720702179.0041.png'/>
        <h1 className={classes.textCenter}>Lộ Trình Hoàn Chỉnh Cho Front-end Developer Năm 2020</h1>
        <p className={classes.content}>Trong ngành lập trình, web development chính là một trong những lĩnh vực thay đổi nhanh nhất, nhiều nhất và thường xuyên nhất. Cách một trang web được xây dựng và vận hàng của 2020 đã khác hoàn toàn so với 2010, 2015, hay thậm chí là 2019. Frontend Development cũng vậy: quyến rũ, hấp dẫn nhưng đầy đổi thay.</p>
        <p>Bài viết này sẽ cung cấp cho các bạn một lộ trình toàn diện nhất để theo đuổi lĩnh vực Front-end đầy thử thách nhưng không kém phần thú vị này, cũng như cung cấp cho bạn những công cụ và hướng đi phù hợp xu thế nhất. Bạn có thể không cần học tất cả những thứ được list ra dưới đây, nhưng chắc chắn rằng, sẽ có ít nhất một phần nào đó hữu ích cho bạn.</p>
        <h3><b>Giai đoạn 1: Chuẩn bị hành trang</b></h3>
        <p className={classes.content}>Trong mỗi cuộc hành trình, việc chuẩn bị cho mình đầy đủ hành trang luôn là điều quan trọng nhất. Và đối với một Front-end Dev, có hai điều không bao giờ được bỏ lỡ:</p>
        <p>Một là <b>Kiến thức về Internet</b></p>
        <p>Hai là <b>Ngôn ngữ lập trình</b></p>
        <p>Đây chính là những bước đầu tiên mà bất cứ Web Dev nào cũng phải đi qua, bất kể bạn là Front-end, Back-end hay Full-Stack. Có thể nói, nếu thành thạo những kiến thức nền tảng này, bạn đã hoàn toàn có thể tự tin trở thành Web Developer và kiếm được tiền từ những dự án phù hợp.</p>
        <img style={{display: 'block', margin: '0 auto', width: '700px'}} src='https://codelearn.io/Media/Default/Users/PhanhTrinh2706/FrontendRoadmap/codelearn-lo%20trinh%20tro%20thanh%20frontend%20developer%202020%201.png'/>
        <p>Đối với Internet, bạn cần tìm hiểu về trình duyệt, HTTP, JSOL, XML, DNS... Chúng là gì? Cách thức hoạt động như thế nào? Có ưu, nhược điểm như thế nào? Về ngôn ngữ lập trình, đừng bao giờ bỏ qua TOP 3: HTML, CSS và JavaScript. Ở mỗi loại ngôn ngữ, lại có những phần kiến thức riêng bạn cần học và luyện tập không ngừng. Luôn dành thời gian cho tất cả các mục trong lộ trình này, luyện tập sử dụng chúng liên tục.</p>
        <p>Một bước cũng quan trọng trong giai đoạn này chính là tìm hiểu về các loại control version system (Hệ thống kiểm soát phiên bản), tìm hiểu cách sử dụng cơ bản của Git và tạo giao diện trên GitHub.</p>
        <img style={{display: 'block', margin: '0 auto'}} src='https://codelearn.io/Media/Default/Users/PhanhTrinh2706/FrontendRoadmap/codelearn-lo%20trinh%20tro%20thanh%20frontend%20developer%202020%202.png'/>
        <p>Khi đã đảm bảo nắm chắc những phần căn bản, hãy tiếp tục với việc tìm hiểu về mantainable CSS và sử dụng các framework CSS. Lúc này, đừng bỏ qua việc luyện tập với CSS bằng những task quen thuộc như viết CSS trong SASS, tự động chuyển đổi SASS sang CSS bằng cách sử dụng NPM Script...</p>
        <img style={{display: 'block', margin: '0 auto', width: '600px'}} src='https://codelearn.io/Media/Default/Users/PhanhTrinh2706/FrontendRoadmap/codelearn-lo%20trinh%20tro%20thanh%20frontend%20developer%202020%203.png'/>
        <h3><b>Giai đoạn 2: Bước chân vào "Cuộc chiến"</b></h3>
        <p className={classes.content}>Giờ đây, sau khi đã chuẩn bị đủ vũ khí và hành trang, đã đến lúc bạn bước chân vào mảng frontend development hiện đại. Lúc này, bạn cần tiếp tục tìm hiểu về JavaScript, Webpack, Babel, cách tích hợp chúng với nhau và cách link code với ESlint. Đây chính là giai đoạn quan trọng giúp bạn thực sự cảm thấy khả năng của mình trên vai trò Frontend Dev.</p>
        <img style={{display: 'block', margin: '0 auto', width: '600px'}} src='https://codelearn.io/Media/Default/Users/PhanhTrinh2706/FrontendRoadmap/codelearn-lo%20trinh%20tro%20thanh%20frontend%20developer%202020%204.png'/>
        <p>Sau đó, bạn cần tiếp tục tìm hiểu về Frontend Framework. Một số loại phổ biến thường được dử dụng hiện nay có thể kể đến là React, Angular và Vue. Nhưng trước hết, tôi khuyên bạn hãy tìm hiểu về React, sau đó là CSS trong JS và có thể là cả Styled Component và CSS Modules nếu thích.</p>
        <img style={{display: 'block', margin: '0 auto', width: '600px'}} src='https://codelearn.io/Media/Default/Users/PhanhTrinh2706/FrontendRoadmap/codelearn-lo%20trinh%20tro%20thanh%20frontend%20developer%202020%205.png'/>
        <p>Progessive web apps cũng là một phần không khó để chinh phục nếu bạn đã thông thạo về các frontend framework. Trong PWA checklist, bạn sẽ có cơ hội tìm hiểu về cách công cụ mình có thể dùng để phát huy lợi thế như lưu trữ, đo lường hiệu suất, sử dụng lighthouse và xem các API browser khác nhau mà bạn có thể sử dụng... Ngoài ra, Rail model và PRPL pattern cũng là những tài liệu nên tìm đọc.</p>
        <p>Kết thúc giai đoạn này, bạn có thể tự tin gọi mình là một Frontend Developer. Đừng quên luyện tập mỗi ngày để ghi nhớ những gì đã học bằng cách chủ động thực hiện những task đơn giản như tạo một ứng dụng cho phép chọn một vài hashtag và dùng API tìm kiếm của Twitter để tìm nạp và hiển thị cho bạn các tweet gần đây nhất cho các hashtag đó trong lưới bố cục như Trello; ghim các hashtag để khi người dùng làm mới trang, trang sẽ nhớ các hashtag mà bạn đã chọn; sử dụng React Router và thêm về các page...</p>
        <h3><b>Giai đoạn 3: Chinh phục mọi thử thách</b></h3>
        <p className={classes.content}>Để đỡ đau đầu khi code và cũng giúp bạn có một vị trí tốt hơn trong công việc, một Frontend Dev hiện đại không bao giờ được bỏ qua Automated Testing. Bạn nên bắt đầu từ việc tìm hiểu các loại test khác nhau với các khái niệm như mocking, stubs... Sau đó là Jest, , Cypress và cảcách tính toán phạm vi kiểm tra.</p>
        <img style={{display: 'block', margin: '0 auto'}} src='https://codelearn.io/Media/Default/Users/PhanhTrinh2706/FrontendRoadmap/codelearn-lo%20trinh%20tro%20thanh%20frontend%20developer%202020%206.PNG'/>
        <p>Static Type Checkers cũng sẽ là 1 công cụ hữu hiệu để giúp code của bạn sau này dễ được bảo trì hơn khi phát triển lên, tái cấu trúc linh hoạt hơn, các IDE được hỗ trợ tốt hơn... Có 2 sự lựa chọn cho bạn là TypeScript và Flow, tuy nhiên nếu phải chọn, bạn nên lựa chọn TypeScript.</p>
        <img style={{display: 'block', margin: '0 auto'}} src='https://codelearn.io/Media/Default/Users/PhanhTrinh2706/FrontendRoadmap/codelearn-lo%20trinh%20tro%20thanh%20frontend%20developer%202020%207.PNG'/>
        <p>Các ứng dụng server-side rendering cũng sẽ giúp hiệu suất hoạt động của bạn tốt hơn, cải thiện SEO trên các ứng dụng client rending. Tuy không phải thứ ắt buộc nhưng Server-side chắc chắn sẽ hỗ trợ bạn rất hiệu quả trong việc tối ưu hóa các ứng dụng frontend. Đối vớirontend framework sẽ lại có những sự lựa chọn server-side khác nhau. Tuy nhiên với lời khuyên sử dụng React như tôi đã đề cập ở trên, bạn nên tiếp tục lựa chọn Next.js để SSR trở nên dễ dàng hơn.</p>
        <img style={{display: 'block', margin: '0 auto'}} src='https://codelearn.io/Media/Default/Users/PhanhTrinh2706/FrontendRoadmap/codelearn-lo%20trinh%20tro%20thanh%20frontend%20developer%202020%208.PNG'/>
        <h3><b>Giai đoạn 4: Tiến tới những vùng xa</b></h3>
        <p className={classes.content}>Nắm chắc được 3 giai đoạn trên, bạn đã hoàn toàn có thể trở thành một Frontend Developer với kĩ năng chuyên môn ổn định, đáp ứng được hầu hết các yêu cầu của công việc rồi. Tuy thế, để bản thân có thể tiến xa hơn, đừng bao giờ ngưng học hỏi. Có rất nhiều thứ bạn có thể lựa chọn để tìm tòi tùy vào sở thích cá nhân và thời gian phù hợp.</p>
        <img style={{display: 'block', margin: '0 auto', width: '600px'}} src='https://codelearn.io/Media/Default/Users/PhanhTrinh2706/FrontendRoadmap/codelearn-lo%20trinh%20tro%20thanh%20frontend%20developer%202020%209.png'/>
        <h3><b>Lộ trình hoàn chỉnh</b></h3>
        <img style={{display: 'block', margin: '0 auto', width: '600px'}} src='https://codelearn.io/Media/Default/Users/PhanhTrinh2706/FrontendRoadmap/codelearn-lo%20trinh%20tro%20thanh%20frontend%20developer%202020.png'/>
        <h3><b>Lời kết</b></h3>
        <p className={classes.content}>Có thể lộ trình này chưa đầy đủ 100%, nhưng về cơ bản đây là những thông tin quan trọng nhất trong hành trình xây dựng một Frontend Developer. Chía khóa quan trọng nhất trên mỗi hành trình không gì khác chính là luyện tập, luyện tập và luyện tập. Chỉ với việc học hỏi không ngừng, bạn mới có thể tiến xa trên con đường mình đã chọn.
Chi tiết hành trình trở thành front end Dev bạn hay tham khảo trong series 4 phần Từng Bước Trở Thành Dev Front-end xịn nhé.
*Tham khảo: GitHub, Hackermoon, Medium</p>
        </div>
      </div>
  
      )
  }
  
  