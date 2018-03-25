$(document).ready(function (){
            $('.action .open').click(function (){
            $(this).parents('.box').removeClass('close').addClass('open');});
            $('.action .close').click(function (){
            $(this).parents('.box').removeClass('open').addClass('close');});});