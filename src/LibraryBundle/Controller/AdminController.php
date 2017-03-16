<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

namespace LibraryBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;



/**
 * Description of AdminController
 *
 * @author hicham
 * @Route("/administration")
 */
class AdminController extends Controller{
    
    /**
     * @Route ("/")
     * @Method({"GET"})
     */
    public function getView () {
        return $this->render("default/adminView.html.twig");
    }
}
