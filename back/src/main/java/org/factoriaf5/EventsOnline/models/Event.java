package org.factoriaf5.EventsOnline.models;
import java.sql.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
@Entity
@Table(name="events")
public class Event {
    @Id @GeneratedValue(strategy=GenerationType.IDENTITY) @Column(name="id")
    private Long id;
    private String title;
    private Date date;
    private Long max_participants;
    private String description;
    private String img_url;
    public Event(){};
    public Event(String title, Long max_participants, String description, String img_url, Date date){
        this.title = title;
        this.max_participants = max_participants;
        this.description = description;
        this.img_url = img_url;
        this.date = date;
    }
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getTitle() {
        return title;
    }
    public void setTitle(String title) {
        this.title = title;
    }
    public Long getMax_participants() {
        return max_participants;
    }
    public void setMax_participants(Long max_participants) {
        this.max_participants = max_participants;
    }
    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }
    public String getImg_url() {
        return img_url;
    }
    public void setImg_url(String img_url) {
        this.img_url = img_url;
    }
    public Date getDate() {
        return date;
    }
    public void setDate(Date date) {
        this.date = date;
    }
    
}
