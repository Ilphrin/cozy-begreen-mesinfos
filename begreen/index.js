var updateContactList = function () {
  cozysdk.defineRequest('Contact', 'all', 'function(doc) { emit(doc.fn, doc); }', function(err, res) {
    if (err != null) return alert(err);
    cozysdk.run('Contact', 'all', {}, function(err, res) {
      if (err != null) return alert(err);
      console.error(res);
      /* contacts == [
        {id:"323274828329", key:"Jane;Willson"},
        {id:"323274827428", key:"John;Smith"}
      ]*/
      render(res);
    });
  });
}

function render(contacts) {
  var HTML = '';
  var name = '';
  for (var i = 0; i < contacts.length; i++) {
    name = contacts[i].key;
    if (contacts[i].key == null)
      name = "Pas de nom";
    HTML += '<tr><td><label>' + name + '</label></td>'
          + '</tr>';
  }
  document.querySelector(".coucou").innerHTML = HTML;
}

document.addEventListener('DOMContentLoaded', updateContactList);
