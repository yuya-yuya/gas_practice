 function myGmailThread() {
   let start = 0;
   let max = 2;
 
   // Gmail受信トレイ内のスレッドを取得（最大2スレッド）
   let threads = GmailApp.getInboxThreads(start, max);
 
   // スレッドのループ
   for(let thread of threads){
     // 件名
     console.log('件名:' + thread.getFirstMessageSubject());
     // メッセージ数
     console.log('スレッド内のメッセージ数:' + thread.getMessageCount());
 
     // 未読なら既読に、既読なら未読にする
     if(thread.isUnread()){
       thread.markRead();
     } else {
       thread.markUnread();
     }
   }
 }
