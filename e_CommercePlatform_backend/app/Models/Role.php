<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
    ];


    public function admin(){
        return  $this->hasMany(Admin::class);
     }

     public function user(){
        return  $this->hasMany(User::class);
     }

     public function seller(){
        return  $this->hasMany(SellerMan::class);
     }
}
