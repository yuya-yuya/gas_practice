 function myGmailMessage() {
   let start = 0;
   let max = 2;
 
   // Gmail受信トレイ内のスレッドを取得（最大2スレッド）
   let threads = GmailApp.getInboxThreads(start, max);
 
   // スレッドのループ
   for(let thread of threads){
 
     // スレッドからメッセージ群（返信・転送したメールも含める）の取得
     let messages = thread.getMessages();
 
     // スレッド内のメッセージループ
     for(let message of messages){
 
       // メッセージの情報を取得
       console.log('From:' + message.getFrom());
       console.log('To:' + message.getTo());
       console.log('件名:' + message.getSubject());
       console.log('日付' + message.getDate());
       console.log('本文:' + message.getPlainBody());
     }
 
     // スレッドループの区切り
     console.log('----------------');
   }
 }
