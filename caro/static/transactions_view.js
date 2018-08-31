document.addEventListener("DOMContentLoaded", function() {
  loadTransactions();
});

function loadTransactions() {
  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", "/get_transactions", true);
  xhttp.onload = function () {
    data = JSON.parse(this.responseText);
    data.forEach(function(txn) {
      addToTable(txn);
    });
  }
  xhttp.send();
}

function startRefund(ids) {
  var ids = ids.split('-');

  var data = new FormData();
  data.append('txn_id', ids[0]);
  data.append('loc_id', ids[1]);

  var xhttp = new XMLHttpRequest();
  xhttp.open('POST', '/start_refund', true);
  xhttp.onload = function () {
    console.log(this.responseText);
    location.reload(true);
  };
  xhttp.send(data);

}

function addToTable(txn) {
  table = document.getElementById('t_body')
  var row = table.insertRow();
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
  cell1.innerHTML = '$' + txn.tender_amount/100;
  cell2.innerHTML = txn.transaction_id;
  cell3.innerHTML = txn.location_id;
  cell4.innerHTML = txn.created_at;
  if (['APPROVED', 'PENDING'].includes(txn.refund_status)) {
    cell5.innerHTML = '<tr><td><input type="button" value=\'' + txn.refund_status + '\'" disabled/></tr></td>';
  } else {
    cell5.innerHTML = '<tr><td><input type="button" onClick="startRefund(\'' + txn.transaction_id + '-' + txn.location_id + '\')" value="Start Refund"/></tr></td>';
  }
}

