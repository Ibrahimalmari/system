<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Section extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'created_by',

    ];


    public function store(){
        return  $this->belongsToMany(store::class , 'store__sections');
     } 

     public function create_section_seller()
     {
         return $this->belongsTo(SellerMan::class);
     } 

}
